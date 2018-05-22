import React , {Component} from 'react';


import {Row,Col} from 'react-materialize';

import Indicadores from '../components/indicadores/index';
import Noticias from '../components/noticias/index';
import AgendaGG from '../components/agenda/index';
import Reunioes from '../components/reunioes/index';
import Ideias from  '../components/ideias/index';
import Unidades from '../components/unidades/index';
export default class Home extends Component{

  
  render(){
    return (
      
        
       
        <div>
           
                  <Row>
                    <Col s={6}>
                        <Indicadores />
                     </Col>

                     <Col s={6}>
                      <AgendaGG />
                     </Col>
                  </Row>
                  <Row>
                    <Col s={6}>
                      <Noticias />
                    </Col>
                    <Col s={6}>
                      <div className="container">
                        <Ideias />
                      </div>
                     </Col>
                  </Row>
                  <Row>
                    <Unidades />
                  </Row>

                    

                    
                 
              
           
           

        </div>
        
     
    )
  }
}

//export default ()=> (<Routes />);
