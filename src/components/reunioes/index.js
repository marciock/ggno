import React,{Component} from 'react';
import {Collapsible,CollapsibleItem,Row,Col,Card} from 'react-materialize';
import axios from 'axios';

class Reunioes extends Component{
    constructor(){
        super();
    }
    state={
        reunioes:[]
    }
    componentDidMount(){
        axios.get('http://10.17.12.218/ggnomotor/modules/reunioes/services/Last.php',{
          headers:{'Acces-Control-Allow-Origin':'*','Content-Type':'application/json'},
          responseType:'json',
        }).then(res=>{
  
          //  console.log(res.data)
          this.setState({reunioes:res.data});
            
        });
      
    }

    render(){
        return (<div>
                   
                   <Col s={12}>
                        <Card className="grey lighten-5" text-className="black-text" title="Reuniões dos Comitês" actions={[<a href="#/reunioes">Todas</a>]}>
                            <Collapsible>
                               {  
                                   this.state.reunioes.map((f,k)=>{
                                    const mydata=f.data
                                       let linha=`${mydata.split('-').reverse().join('/')} ${f.comite} - ${f.assunto} local:${f.local} - inicio: ${f.hora_inicial} término:${f.hora_final}`
                                  return (                           
                                    <CollapsibleItem header={linha} icon="event_note" key={k}>
                                        <p>{f.descricao}</p>
                                        <p>{f.participantes}</p>
                                    </CollapsibleItem>)
                                })
                               }
                            </Collapsible>
                        </Card>
                    </Col>
                   
                </div>
            );
    }
}
export default Reunioes;