import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';

export default class Dashboard extends Component {
    render() {
        return (
            <Container style={{ paddingTop: '40px', paddingBottom: '40px' }}>
                <Container className="dashboard">
                    <Row style={{ height: '40px', backgroundColor: '#FEECC3' }}>
                        <Col>Howdy, User</Col>
                    </Row>
                    <Row style={{ height: '500px' }}>
                        <Col xs={2} style={{ backgroundColor: '#7C9CAB' }}>
                            <Nav defaultActiveKey="/home" className="flex-column">
                                <Nav.Link eventKey="home">Movies</Nav.Link>
                                <Nav.Link eventKey="link-1">Music</Nav.Link>
                                <Nav.Link eventKey="link-2">TV Shows</Nav.Link>
                                <Nav.Link eventKey="disabled" disabled>Books</Nav.Link>
                            </Nav>
                        </Col>
                        <Col xs={10} style={{ backgroundColor: '#e4e4e4' }}>
                            <Row style={{paddingTop: '40px'}}>
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src="https://picsum.photos/id/1013/200/100" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>

                                    <Card>
                                        <Card.Img variant="top" src="https://picsum.photos/id/1011/200/100" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>

                                        </Card.Body>
                                    </Card></Col>
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src="https://picsum.photos/id/1003/200/100" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>

                                        </Card.Body>
                                    </Card></Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}
