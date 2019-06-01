import React, { Component } from 'react';
import KnightSVG from './Knight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default class MainNav extends Component {
    render() {
        return (
            <Navbar expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/"><KnightSVG width={30} color={'#FEECC3'} colorHover={'white'} viewBox={'0 0 64 100'} style={{ marginRight: '1rem' }} />peter lanier</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" variant="dark">
                        <Nav>
                            <Nav.Link href="#about">about</Nav.Link>
                            <Nav.Link href="#blog">blog</Nav.Link>
                            <Nav.Link href="https://www.linkedin.com/in/peter-lanier/" target="_blank">
                                <FontAwesomeIcon icon={['fab', 'linkedin']} size={'1x'} color={'#FEECC3'} />
                            </Nav.Link>
                            <Nav.Link href="https://github.com/peterlanier" target="_blank">
                                <FontAwesomeIcon icon={['fab', 'github-alt']} size={'1x'} color={'#FEECC3'} />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
