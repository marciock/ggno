import React,{Component} from 'react';
import axios from 'axios';
import {Row,Col,Card,Modal,Button} from 'react-materialize';

 class TabGgno extends Component{
    constructor(){
        super();
    }
    state={
        noticias:[]
    }
    componentDidMount(){
        axios.get(this.props.url,{
          headers:{'Acces-Control-Allow-Origin':'*','Content-Type':'application/json'},
          responseType:'json',
        }).then(res=>{
  
           // console.log(res.data)
          this.setState({noticias:res.data});
            
        });

      
    }
    
    render(){
        return(
            <div>
                
                    {
                        this.state.noticias.map((f)=>{

                            const mydata=f.data;
                            const noti=`Noticias - ${mydata.split('-').reverse().join('/')} - ${f.titulo}`;

                           return(
                               
                            <Col  s={12}>
                            <Card className='grey lighten-5' textClassName='black-text' title={noti} actions={[
                                <Modal header={noti}   fixedFooter trigger={<Button>Ver a Noticia toda</Button>}>
                                  <Col s={6}><p>{f.descricao}</p></Col>
                                  <Row>
                                    <Col s={4}><a href={f.imagem1}><img src={f.imagem1} width="250px" height="125px"/></a></Col>
                                   

                                  </Row>
                                 
                                </Modal>]}>
                                {f.resumo}
                            </Card>
                        </Col>
                           )
                               
                            
                        })
                        
                    }
                
            </div>
        )
    }
}
export default TabGgno;

