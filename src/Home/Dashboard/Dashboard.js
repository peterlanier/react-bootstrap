import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Movies from './Movies';
import Shows from './Shows';
import Music from './Music';
import Books from './Books';

export default class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            isHidden: [true, true, true, true]
        }
    }
    
    showHide(num){
        console.log(this.state);
        this.setState((prevState) => {
            const newItems = [true, true, true, true];
            newItems[num] = !newItems[num];
            return {isHidden: newItems};
        });
    }

    render() {
        return (
            <Container style={{ paddingTop: '40px', paddingBottom: '40px' }}>
                <Container className="dashboard">
                    <Row style={{ height: '40px', backgroundColor: '#FEECC3' }}>
                        <Col>Howdy, User</Col>
                    </Row>
                    <Row style={{ height: '500px'}}>
                        <Col xs={2} style={{ backgroundColor: '#7C9CAB' }}>
                            <Nav defaultActiveKey="/home" className="flex-column">
                                <Nav.Link eventKey="home" onClick={()=>this.showHide(0)}>Movies</Nav.Link>
                                <Nav.Link eventKey="link-1" onClick={()=>this.showHide(1)}>Music</Nav.Link>
                                <Nav.Link eventKey="link-2" onClick={()=>this.showHide(2)}>TV Shows</Nav.Link>
                                <Nav.Link eventKey="disabled" onClick={()=>this.showHide(3)}>Books</Nav.Link>
                            </Nav>
                        </Col>
                        <Col xs={10} style={{ backgroundColor: '#e4e4e4' }}>
                            <Row style={{paddingTop: '40px', height: '500px', overflowY: 'scroll'}}>
                                {!this.state.isHidden[0] && <Movies />}
                                {!this.state.isHidden[1] && <Music />}
                                {!this.state.isHidden[2] && <Shows />}
                                {!this.state.isHidden[3] && <Books />}

                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}
