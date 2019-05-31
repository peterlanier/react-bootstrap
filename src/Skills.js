import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Skills extends Component {
    render() {
        return (
            <div className="container-fluid" style={{ backgroundColor: 'white' }}>
                <div style={{ height: '40px' }} />
                <div className="container">
                    <h1 className="text-center" style={{fontWeight: 900, color: '#343A3F'}}> languages + technologies </h1>
                    <div style={{ height: '80px' }} />
                    <div className="row">
                        <div className="col" style={{ textAlign: 'center' }}>
                            <FontAwesomeIcon icon={['fab', 'html5']} size={'3x'} color={'#7C9CAB'} />
                            <p className="text-monospace">html</p>
                        </div>
                        <div className="col" style={{ textAlign: 'center' }}>
                            <FontAwesomeIcon icon={['fab', 'css3']} size={'3x'}  color={'#7C9CAB'} />
                            <p className="text-monospace">css</p>
                        </div>
                        <div className="col" style={{ textAlign: 'center' }}>
                            <FontAwesomeIcon icon={['fab', 'js']} size={'3x'}  color={'#7C9CAB'} />
                            <p className="text-monospace">javascript</p>
                        </div>
                        <div className="col" style={{ textAlign: 'center' }}>
                            <FontAwesomeIcon icon={['fab', 'bootstrap']} size={'3x'}  color={'#7C9CAB'} />
                            <p className="text-monospace">bootstrap</p>
                        </div>
                        <div className="col" style={{ textAlign: 'center' }}>
                            <FontAwesomeIcon icon={['fab', 'php']} size={'3x'}  color={'#7C9CAB'} />
                            <p className="text-monospace">php</p>
                        </div>
                        <div className="col" style={{ textAlign: 'center' }}>
                            <FontAwesomeIcon icon={['fab', 'java']} size={'3x'}  color={'#7C9CAB'} />
                            <p className="text-monospace">java</p>
                        </div>
                    </div>
                    <div style={{ height: '80px' }} />
                    <div className="row">
                        <div className="col" style={{ textAlign: 'center' }}>
                            <FontAwesomeIcon icon={['fab', 'node-js']} size={'3x'}  color={'#7C9CAB'} />
                            <p className="text-monospace">node</p>
                        </div>
                        <div className="col" style={{ textAlign: 'center' }}>
                            <FontAwesomeIcon icon={['fab', 'github']} size={'3x'}  color={'#7C9CAB'} />
                            <p className="text-monospace">git</p>
                        </div>
                        <div className="col" style={{ textAlign: 'center' }}>
                            <FontAwesomeIcon icon={['fab', 'react']} size={'3x'}  color={'#7C9CAB'} />
                            <p className="text-monospace">react</p>
                        </div>
                        <div className="col" style={{ textAlign: 'center' }}>
                            <FontAwesomeIcon icon={['fab', 'angular']} size={'3x'}  color={'#7C9CAB'} />
                            <p className="text-monospace">angular</p>
                        </div>
                        <div className="col" style={{ textAlign: 'center' }}>
                            <FontAwesomeIcon icon={['fab', 'yarn']} size={'3x'}  color={'#7C9CAB'} />
                            <p className="text-monospace">yarn</p>
                        </div>
                        <div className="col" style={{ textAlign: 'center' }}>
                            <FontAwesomeIcon icon={['fab', 'npm']} size={'3x'}  color={'#7C9CAB'} />
                            <p className="text-monospace">npm</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
