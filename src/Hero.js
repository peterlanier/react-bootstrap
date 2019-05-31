import React, { Component } from 'react';
import Particles from 'react-particles-js';
import ManSVG from './Man';

export default class Hero extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid" style={{ position: 'relative' }}>
                <Particles
                    height={'450px'}
                    params={{
                        "particles": {
                            "number": {
                                "value": 160,
                                "density": {
                                    "enable": true,
                                    "value_area": 800
                                }
                            },
                            "color": {
                                "value": "#fff"
                            },
                            "shape": {
                                "type": "circle",
                            },
                            "opacity": {
                                "value": 1,
                                "random": true,
                                "anim": {
                                    "enable": true,
                                    "speed": 1,
                                    "opacity_min": 0,
                                    "sync": false
                                }
                            },
                            "size": {
                                "value": 15,
                                "random": true,
                                "anim": {
                                    "enable": false,
                                    "speed": 4,
                                    "size_min": 0.3,
                                    "sync": false
                                }
                            }, 
                            "line_linked": { 
                                "enable": false,
                                "distance": 150,
                                "color": "#ffffff",
                                "opacity": 0.4,
                                "width": 1
                            },
                            "move": {
                                "enable": true,
                                "speed": 1,
                                "direction": "none",
                                "random": true,
                                "straight": false,
                                "out_mode": "out",
                                "bounce": false,
                                "attract": {
                                    "enable": false,
                                    "rotateX": 600,
                                    "rotateY": 600
                                }
                            }
                        },
                        "interactivity": {
                            "detect_on": "canvas",
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "bubble"
                                },
                                "onclick": {
                                    "enable": true,
                                    "mode": "repulse"
                                },
                                "resize": true
                            },
                            "modes": {
                                "grab": {
                                    "distance": 400,
                                    "line_linked": {
                                        "opacity": 1
                                    }
                                },
                                "bubble": {
                                    "distance": 250, "size": 0, "duration": 2, "opacity": 0, "speed": 3 }, "repulse": { "distance": 400, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }
                    }}
                />
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
                        <p className="lead" style={{textAlign: 'center'}}>Full-stack & front-end UI/UX developer.</p>
                    </div>
                </div>
            </div>
        )
    }
}