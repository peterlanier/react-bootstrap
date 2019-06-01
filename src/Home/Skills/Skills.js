import React, { Component } from 'react';
import Icon from './Icon.js';
import Container from 'react-bootstrap/Container'

export default class Skills extends Component {
    icons = [
        {
            id: 1,
            title: 'html5',
            icon: 'html5'
        },
        {
            id: 2,
            title: 'css',
            icon: 'css3'
        },
        {
            id: 3,
            title: 'javascript',
            icon: 'js'
        },
        {
            id: 4,
            title: 'bootstrap',
            icon: 'bootstrap'
        },
        {
            id: 5,
            title: 'php',
            icon: 'php'
        },
        {
            id: 6,
            title: 'java',
            icon: 'java'
        },
        {
            id: 7,
            title: 'node',
            icon: 'node-js'
        },
        {
            id: 8,
            title: 'git',
            icon: 'github'
        },
        {
            id: 9,
            title: 'react',
            icon: 'react'
        },
        {
            id: 10,
            title: 'angular',
            icon: 'angular'
        },
        {
            id: 11,
            title: 'yarn',
            icon: 'yarn'
        },
        {
            id: 12,
            title: 'npm',
            icon: 'npm'
        },
        {
            id: 13,
            title: 'docker',
            icon: 'docker'
        },
        {
            id: 14,
            title: 'devtools',
            icon: 'chrome'
        },
        {
            id: 15,
            title: 'wordpress',
            icon: 'wordpress'
        },
        {
            id: 16,
            title: 'scss',
            icon: 'sass'
        },
        {
            id: 17,
            title: 'creative cloud',
            icon: 'adobe'
        },
        {
            id: 18,
            title: 'pied piper',
            icon: 'pied-piper-hat'
        },
    ];



    render() {
        return (
            <Container fluid={true} className="skills" style={{ backgroundColor: '#343A3F' }}>
                <div style={{ height: '40px' }} />
                <div className="container">
                    <h1 className="text-center" style={{ fontWeight: 900, color: 'white' }}> languages + technologies </h1>
                    <div style={{ height: '40px' }} />
                        <Icon icons={this.icons} />
                </div>
            </Container>
        )
    }
}
