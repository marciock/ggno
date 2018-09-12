import React,{Component} from 'react';
import {Collapsible,CollapsibleItem,Row,Col,Card} from 'react-materialize';
import axios from 'axios';

class AgendaGG extends Component{
    constructor(){
        super();
    }
    state={
        agenda:[]
    }
    componentDidMount(){
       
        const host='http://10.17.12.218/ggnomotor/modules/agenda/services/Last.php'
        axios.get(host,{
          headers:{'Acces-Control-Allow-Origin':'*','Content-Type':'application/json'},
          responseType:'json',
        }).then(res=>{
  
          //  console.log(res.data)
          this.setState({agenda:res.data});
            
        });
      
    }

    render(){
        return (<div>
                   
                   <Col s={12}>
                        <Card className="grey lighten-5" text-className="black-text" title="Agenda" actions={[<a href="#/agenda">Todas</a>]}>
                            <Collapsible>
                               {  
                                   this.state.agenda.map((f,k)=>{
                                    const mydata=f.data
                                       let linha=`${mydata.split('-').reverse().join('/')} ${f.assunto} local:${f.cidade} - inicio: ${f.hora_inicial} término:${f.hora_final}`
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
export default AgendaGG;
