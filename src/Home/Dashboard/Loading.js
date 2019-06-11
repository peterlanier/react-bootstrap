import React, { Component } from 'react'

export default class Loading extends Component {
    render() {
        return (
            <h3 style={{height: '100%', width: '100%', backgroundColor: 'rgba(0,0,0,1)', color: 'white', display: 'inline-block', lineHeight: '500px'}} className={'text-center align-middle'}>Loading...</h3>
        )
    }
}
