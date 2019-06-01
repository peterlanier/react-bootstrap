import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IconModal from './IconModal';

class Icon extends Component {

    modalClose = () => this.setState({ modalShow: false });

    constructor(...args) {
        super(...args);

        this.state = { modalShow: false };
    }

    iconColor = '#FEECC3';
    icons = this.props.icons.map((icon) =>
        <Col key={icon.id} lg={2} md={4} sm={6} style={{ textAlign: 'center' }}>
            <FontAwesomeIcon
                icon={['fab', icon.icon]}
                size={'3x'}
                color={this.iconColor}
                onClick={() => this.setState({ modalShow: true })}
            />
            <IconModal
                key={icon.id}
                // show={this.state.modalShow}
                onHide={this.modalClose}
            />
            <p className="text-monospace yellow">{icon.title}</p>
        </Col>
    );

    render() {

        return (
            <Row>
                {this.icons}
            </Row>
        );
    }
}

export default Icon;