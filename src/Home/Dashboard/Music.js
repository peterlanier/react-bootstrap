import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Loading from './Loading';

export default class Music extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            users: [],
            movies: [],
            error: null
        }
    }

    ids = [
        'd28aa009-c73d-3ec7-b791-ff358cb0a675', //glenn gould
        '94ccfe26-223a-4591-8aaa-e985c146e4f2', //rhead
        'e9a3f1cb-d336-421d-8305-4a7290993851', //phish
    ];

    dataFill = [
        {name: 'Glenn Gould', album: 'Goldberg Variations'},
        {name: 'Radiohead', album: 'Kid A'},
        {name: 'Phish', album: 'The Story of the Ghost'},
            ];

    fetchMovies() {
        const promises = this.ids.map(id => fetch(`http://coverartarchive.org/release/${id}`)
            .then(response => response.json()));
        console.log(promises);
        Promise.all(promises)
            .then(data => {
                console.log(data)
                this.setState({
                    movies: data,
                    isLoading: false,
                })
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
        this.fetchMovies();
    }



    render() {
        const { isLoading, movies, error } = this.state;

        return (
            <React.Fragment>
                    {console.log(movies, isLoading)}
                    {error ? console.log(error.message) : null}
                    {!isLoading ? (
                        <>
                        <h1 className={'pl-3'}>My Music</h1>
                        <CardGroup>
                            {movies.map((movie, i) => {
                                const { images } = movie;
                                return (
                                    <Col key={i} sm={6} md={3}>
                                        <Card className={'mb-4'}>
                                            <Card.Img variant="top" src={images[0].image} />
                                            <Card.Body>
                                                <Card.Title>{this.dataFill[i].name}</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">{this.dataFill[i].album}</Card.Subtitle>
                                                <Card.Text>
                                                    <br />
                                                </Card.Text>

                                            </Card.Body>
                                        </Card>
                                    </Col>
                                );
                            })}
                        </CardGroup>
                        </>
                    ) : (
                        <Loading />
                    )}
                
            </React.Fragment>
        );
    }
}
