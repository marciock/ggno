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
                    <Circle img={urma} text="URMA" />
                </Col>
                 <Col s={6}>
                    <Circle img={urcm} text="URCM" />
                </Col>
            </Row>
            <Row>
                 <Col s={6}>
                    <Circle img={urpv} text="URPV" />
                </Col>
                <Col s={6}>
                    <Circle img={urum} text="URUM" />
                </Col>
            </Row>
            </div>
        );
    }
}

export default Unidades;