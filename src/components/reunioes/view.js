import React,{Component} from 'react';
import {Collapsible,CollapsibleItem,Row,Col,Card} from 'react-materialize';
import axios from 'axios';

class View extends Component{
    constructor(){
        super();
    }
    state={
        reunioes:[]
    }
    componentDidMount(){
        axios.get('http://localhost/ggnomotor/modules/reunioes/services/Lista.php',{
          headers:{'Acces-Control-Allow-Origin':'*','Content-Type':'application/json'},
          responseType:'json',
        }).then(res=>{
  
            console.log(res.data)
          this.setState({reunioes:res.data});
            
        });
      
    }

    render(){
        return (<div className="container" >
                <Row>
                    <h3> Reuniões dos Comitês </h3>
                   
                   <Row>
                        
                            <Collapsible>
                               {  
                                   this.state.reunioes.map((f,k)=>{
                                       let linha=`${f.data} ${f.comite} ${f.assunto} local:${f.cidade} - inicio: ${f.hora_inicial} término:${f.hora_final}`
                                  return (                           
                                    <CollapsibleItem header={linha} icon="event_note" key={k}>
                                        <p>{f.descricao}</p>
                                        <p>{f.participantes}</p>
                                    </CollapsibleItem>)
                                })
                               }
                            </Collapsible>
                       
                   </Row>
                   </Row>
                </div>
            );
    }
}
export default View;