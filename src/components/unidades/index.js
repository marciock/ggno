import React,{Component} from 'react';
import {Col,Row} from 'react-materialize';
import Circle from './Circle';

import urma from './img/urma.jpg';
import urcm from './img/urcm.jpg';
import urpv from './img/urpv.jpg';
import urum from './img/urum.jpg';

class Unidades extends Component{
    render(){
        return (
            <div style={{alignTop:'5em'}} >
            <Row className="container">
                <h3>Portais</h3>
            </Row>
             <Row >
             
                <Col s={6}>
                    <Circle img={urma} text="GRMA" href="http://10.7.12.137" />
                </Col>
                 <Col s={6}>
                    <Circle img={urcm} text="GRCM"   href="http://10.6.63.45/PortalURCM" />
                </Col>
            </Row>
            <Row>
                 <Col s={6}>
                    <Circle img={urpv} text="GRPV"  href="#"  />
                </Col>
                <Col s={6}>
                    <Circle img={urum} text="GRUM"  href="http://aquarius/"  />
                </Col>
            </Row>
            </div>
        );
    }
}

export default Unidades;