import React,{Component} from 'react';
import {Row,Col,Card, CardTitle,Button,Container,Collapsible,CollapsibleItem} from 'react-materialize';

import axios from 'axios';


class ComitesView extends Component{
    constructor(){
        super();
    }
    state={
        projetos:[],
        integrantes:[]
       
      }
     
      componentDidMount(){
        const { match: {params}}=this.props;


         console.log(params);
          axios.get(`http://10.17.12.218/ggnomotor/modules/comites/services/ProjetosComites.php?id=${params.id_comite}`,{
            headers:{'Acces-Control-Allow-Origin':'*','Content-Type':'application/json'},
            responseType:'json',
          }).then(res=>{
            
             console.log(res.data)
            return  this.setState({projetos:res.data});
              
          });
      

        

          axios.get(`http://10.17.12.218/ggnomotor/modules/usuarios/services/SearchIntegrantesComites.php?id=${params.id_comite}`,{
            headers:{'Acces-Control-Allow-Origin':'*','Content-Type':'application/json'},
            responseType:'json',
          }).then(res=>{

            console.log(res.data)
            return this.setState({integrantes:res.data});
              
          });
        
      }
    
    render(){
       
        
      // console.log(params);
        return (
              <div>
                 
              </div>
               
            );
    }
}
export default ComitesView;

/*
 { 
                          this.state.projetos.map((f)=>{
                            return (
                              <CollapsibleItem header={f.projeto} icono='menu'>
                                <p>{f.descricao}</p>
                              
                              </CollapsibleItem>
                            )
                          })
                        
                        
                        }



   <Container>
                  <Row>
                      <col s={8}>
                        <h5>Projetos</h5>
                        <Collapsible popout defaultActiveKey={1}>

                       
                        
                        </Collapsible>

                      
                      </col>

                      <col s={4}>
                      </col>
                        
                  </Row>
                  </Container>
*/