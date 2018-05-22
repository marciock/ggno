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
  
            console.log(res.data)
          this.setState({noticias:res.data});
            
        });

      
    }
    
    render(){
        return(
            <div>
                
                    {
                        this.state.noticias.map((f)=>{
                            const noti=`Noticias - ${f.data} - ${f.titulo}`;

                           return(
                               
                            <Col  s={12}>
                            <Card className='grey lighten-5' textClassName='black-text' title={noti} actions={[
                                <Modal header={noti}   fixedFooter trigger={<Button>Ver a Noticia toda</Button>}>
                                  <Col s={6}><p>{f.descricao}</p></Col>
                                  <Col s={4}><img src={f.imagem} /></Col>
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

