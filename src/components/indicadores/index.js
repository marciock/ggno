import React,{Component} from 'react';
import {Card, CardTitle,Modal,Button} from 'react-materialize';
import axios from 'axios';

class Indicadores extends Component{
    constructor(){
        super();
    }
    state={
        indicadores:[]
    }
    componentDidMount(){
        axios.get('http://localhost/ggnomotor/modules/indicadores/services/Lista.php',{
          headers:{'Acces-Control-Allow-Origin':'*','Content-Type':'application/json'},
          responseType:'json',
        }).then(res=>{
  
            console.log(res.data)
          this.setState({indicadores:res.data});
            
        });
      
    }
    
    render(){
        return (<div>
                   {
                    
                    this.state.indicadores.map((f)=>{
                      //  console.log(f.arquivo)
                    return ( <Card className='medium' header={<CardTitle image={f.arquivo}>Indicadores - {f.mes}/{f.ano} </CardTitle>}
                                actions={[<div className="row"><div className="col s2"><a href="#/indicadores" className="btn-flat">Todos</a></div>
                                    <div className="col s2"> <Modal
                                    header={`Indicadores - ${f.mes}/${f.ano}`}
                                    fixedFooter
                                    trigger={<Button className="btn-flat">Visualizar</Button>}>
                                      <img src={f.arquivo} />                               
                                    </Modal></div></div>]} >
                                
                                
                        </Card> 
                    )
                 })
               
                }
                </div>
            );
    }
}
export default Indicadores;