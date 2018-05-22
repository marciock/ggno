import React,{Component} from 'react';
import {Card, CardTitle,Button} from 'react-materialize';
import axios from 'axios';
import ideia from './ideia.jpg'
import New from './new';
class Ideias extends Component{
    constructor(){
        super();
    }
    state={
        ideias:[]
    }
    componentDidMount(){
        
      
    }
    
    render(){
        return (<div>
                    <Card  header={<CardTitle reveal image={ideia} waves='light' />}
                     title="Banco de Ideias" 
                     reveal={<New />}>
                      <p>Cadastre sua ideia !</p>
                    </Card> 
                                
                       
                   
                
               </div>
               
            );
    }
}
export default Ideias;