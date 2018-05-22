import React,{Component} from 'react';
import {Col} from 'react-materialize';
import Circle from './Circle';

import urma from './img/urma.jpg';
import urcm from './img/urcm.jpg';
import urpv from './img/urpv.jpg';
import urum from './img/urum.jpg';

class Unidades extends Component{
    render(){
        return (
            <div style={{alignTop:'5em'}}>
                <Col s={3}>
                    <Circle img={urma} text="GGNO" />
                </Col>
                 <Col s={3}>
                    <Circle img={urcm} text="URCM" />
                </Col>
                 <Col s={3}>
                    <Circle img={urpv} text="URPV" />
                </Col>
                <Col s={3}>
                    <Circle img={urum} text="URUM" />
                </Col>
            </div>
        );
    }
}

export default Unidades;