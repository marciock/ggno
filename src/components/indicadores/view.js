import React,{Component} from 'react';
import {Card, CardTitle,Modal,Button} from 'react-materialize';
import axios from 'axios';

class View extends Component{
    constructor(){
        super();
    }
    state={
        indicadores:[]
    }
    componentDidMount(){
        axios.get('http://10.17.12.218/modules/indicadores/services/Last.php',{
          headers:{'Acces-Control-Allow-Origin':'*','Content-Type':'application/json'},
          responseType:'json',
        }).then(res=>{
  
            console.log(res.data)
          this.setState({indicadores:res.data});
            
        });
      
    }
    
    render(){
        return (<div className="row container">
                <h3>Indicadores</h3>
                   {
                    
                    this.state.indicadores.map((f,k)=>{
                      
                    return ( <div className="col s3" key={k}>
                            <Card className='small' header={<CardTitle image={f.arquivo}>Indicadores - {f.mes}/{f.ano} </CardTitle>}
                                    actions={[<div className="col s2"><a href={f.arquivo} className="btn-flat black-text">Visualizar</a></div>
                                    
                                    ]} >
                              
                            </Card> 
                        </div>
                    )
                 })
               
                }
                </div>
            );
    }
}
export default View;