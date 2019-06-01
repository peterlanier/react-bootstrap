import React, { Component } from 'react';
import Particle from './Particle';
import Jumbotron from 'react-bootstrap/Jumbotron';

import ManSVG from './Man';

export default class Hero extends Component {
    render() {
        return (
            <Jumbotron style={{ position: 'relative' }}>
                <Particle height={'450px'} />
                <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    paddingTop: "64px"
                }}>
                    <div className="container">
                        <ManSVG width={400} color={'#FEECC3'} colorHover={'white'} viewBox={'50 150 1310 770'} style={{marginLeft: 'calc(-200px + 50%)'}} />
                        <h1 className="display-4" style={{textAlign: 'center'}}>{'<'}<span style={{ fontWeight: 900 }}>coder</span>{' />'}</h1>
                        <p className="lead" style={{textAlign: 'center'}}>full-stack & front-end UI/UX developer.</p>
                    </div>
                </div>
            </Jumbotron>
        )
    }
}