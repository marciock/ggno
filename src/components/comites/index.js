import React,{Component} from 'react';
import {Row,Col,Card, CardTitle,Container} from 'react-materialize';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Comites extends Component{
    constructor(){
        super();
        this.handleClick=this.handleClick.bind(this);
    }
    state={
        comites:[],
        valor:''
      }
      componentDidMount(){
          axios.get('http://10.17.12.218/ggnomotor/modules/comites/services/ListaComites.php',{
            headers:{'Acces-Control-Allow-Origin':'*','Content-Type':'application/json'},
            responseType:'json',
          }).then(res=>{
    
            // console.log(res.data)
            this.setState({comites:res.data});
              
          });

          

        
          
      }
      handleClick(){

      }
      
    render(){
        return (<div>
                <Container>
                <Row>

                {
                    this.state.comites.map((f)=>{
                        return(
                            <Col s={4}>
                                <Card  className='blue-grey lighten-5' textClassName='black-text' title={f.comite} actions={[<Link to={`/comitesview/${f.id_comite}`}>Ver mais..</Link>]}>
                                    <p><b>Representante :</b> {f.nome}</p>
                                    <p><b>Objetivos: -</b>{f.objetivos}</p>
                                </Card> 
                            </Col>
                        )
                    })

                }
                      
             </Row>
             </Container>
               </div>
               
            );
    }
}
export default Comites;