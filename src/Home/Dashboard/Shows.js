import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';

export default class Shows extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            shows: [],
            error: null
        }
    }

    ids = [
        'tt0348914', //Deadwood
        'tt0098936', //Twin Peaks
        'tt0092455', //TNG
        'tt0944947', //GoT
        'tt0303461', //Firefly
        'tt0384766', //Rome
        'tt0264235', //Curb
        'tt0290978', //Office
        'tt0105946', //B5
        'tt0072500', //Fawlty

    ];

    fetchShows() {
        const promises = this.ids.map(id => fetch(`http://www.omdbapi.com/?i=${id}&apikey=d442e16a`)
            .then(response => response.json()));

        Promise.all(promises)
            .then(data => {
                console.log(data)
                this.setState({
                    shows: data,
                    isLoading: false,
                })
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
        this.fetchShows();
    }



    render() {
        const { isLoading, shows, error } = this.state;

        return (
            <React.Fragment>
                <h1 className={'pl-3'}>My Shows</h1>
                <CardGroup>
                    {error ? console.log(error.message) : null}
                    {!isLoading ? (

                        shows.map(show => {
                            const { Title, Poster, Year, Runtime } = show;
                            return (
                                <Col key={Title} sm={6} md={3}>
                                    <Card className={'mb-4'}>
                                        <Card.Img variant="top" src={Poster} />
                                        <Card.Body>
                                            <Card.Title>{Title}</Card.Title>
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
