import React, { Component } from 'react';
import KnightSVG from './Knight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                
                <a className="navbar-brand" href="#"><KnightSVG width={30} color={'#FEECC3'} colorHover={'white'} viewBox={'0 0 64 100'} style={{marginRight: '1rem'}} />peter lanier</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">blog <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">about</a>
                        </li>
                    </ul>
                    <FontAwesomeIcon icon={['fab', 'linkedin']} size={'1x'}  color={'#FEECC3'} />&nbsp;&nbsp;&nbsp;&nbsp;
                    <FontAwesomeIcon icon={['fab', 'github-alt']} size={'1x'}  color={'#FEECC3'} />
                </div>
                </div>
            </nav>
        )
    }
}
