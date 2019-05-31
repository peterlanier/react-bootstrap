import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Icon(props) {

    const iconColor = '#FEECC3';

    const icons = props.icons.map((icon) =>
        <Col key={icon.id} className="col-sm-2" style={{ textAlign: 'center' }}>
            <FontAwesomeIcon icon={['fab', icon.icon]} size={'3x'} color={iconColor} />
            <p className="text-monospace yellow">{icon.title}</p>
        </Col>
    );

    return (
        <Row>
        {icons}
        </Row> 
    );
}

export default Icon;