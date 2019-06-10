import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export default class Movie extends Component {
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
        'tt0120737', //Fellowship
        'tt0468569', //Dark Knight
        'tt0062622', //2001 A Space Odysee
        'tt0469494', //There Will Be Blood
        'tt1408101', //Star Trek Into Darkness
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
                {console.log(movies, isLoading)}
                {error ? console.log(error.message) : null}
                {!isLoading ? (
                    // <img src={movies.Poster} alt="this" />
                    movies.map(movie => {
                        const { Title, Poster, Plot } = movie;
                        return (
                            <Col key={Title}>
                                <Card style={{width: '12rem'}}>
                                    <Card.Img variant="top" src={Poster}/>
                                    <Card.Body>
                                        <Card.Title>{Title}</Card.Title>
                                        <Card.Text>
                                            {Plot}
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })
                ) : (
                        <h3>Loading...</h3>
                    )}
            </React.Fragment>
        );
    }
}
