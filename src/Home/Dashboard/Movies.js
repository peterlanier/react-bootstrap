import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';

export default class Movies extends Component {
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
        'tt0816692', //Interstellar
        'tt1392190', //Fury Road
        'tt0166924', //Mulholland Drive
        'tt0047478', //Seven Samurai
        'tt0468569', //Dark Knight
        'tt0167260', //LOTR
        'tt0062622', //2001 A Space Odysee
        'tt0469494', //There Will Be Blood
        'tt0084726', //Star Trek
        'tt0081398', //Raging Bull
        'tt0068646', //The Godfather
        'tt0082971', //Raiders
        'tt0047396', //Rear Window

    ];

    fetchMovies() {
        const promises = this.ids.map(id => fetch(`http://www.omdbapi.com/?i=${id}&apikey=d442e16a`)
            .then(response => response.json()));

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
                <h1 className={'pl-3'}>My Movies</h1>
                <CardGroup>
                    {console.log(movies, isLoading)}
                    {error ? console.log(error.message) : null}
                    {!isLoading ? (

                        movies.map(movie => {
                            const { Title, Poster, Year, Director, Runtime } = movie;
                            return (
                                <Col key={Title} sm={6} md={3}>
                                    <Card className={'mb-4'}>
                                        <Card.Img variant="top" src={Poster} />
                                        <Card.Body>
                                            <Card.Title>{Title}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">{Director}</Card.Subtitle>
                                            <Card.Text>
                                                {Year}<br />
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })

                    ) : (
                            <h3>Loading...</h3>
                        )}
                </CardGroup>
            </React.Fragment>
        );
    }
}
