import React, { Component } from 'react';
import {Input,Row,Col, Button} from 'react-materialize';
import axios from 'axios';


class New extends Component {

  constructor(){
    super();
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    
  }
  state={
    author:{chave:'',nome:'',titulo:'',descricao:''}
  }
 handleChange=event=>{
 
   let field=event.target.name;
   let value=event.target.value;
   this.state.author[field]=value;
   //console.log(value)
   return this.setState({author:this.state.author});
 }
 
  handleSubmit=event=>{

    event.preventDefault();
    
      const data=this.state.author;
  axios.post('http://localhost/ggnomotor/modules/ideias/services/Insert.php',data).then(res=>{
      console.log(res);
      console.log(res.data);
      
    }).catch(function (error) {
      console.log(error);
  });

  }

  render() {
    
    
    return (
      <div>
     
        <div className="container">
           <h3> Nova Ideia</h3>
              <Row>
                <div>
                  <p>ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
               <Input  s={12} label="Chave" name="chave" id="chave" onChange={this.handleChange}/>
               <Input  s={12}label="Nome Completo" name="nome" id="nome" onChange={this.handleChange} />
               <Input  s={12}  label="Título" name="titulo" id="titulo" onChange={this.handleChange}/>
               <Input  type="textarea" s={12} label="Descrição" id="descricao" name="descricao" onChange={this.handleChange}/> 
              </Row>
              <Row>
                <Col s={3}><Button floating className="green" waves="light" icon="save" type="submit" /></Col>
               
              </Row>

                
           
        </div>
       
       
     </div>
    );
  }
}

export default New;