import React, { Component } from 'react';
import TableView from './TableView';

import axios from 'axios';

class TodosDocumentos extends Component {
  constructor(){
    super();
   
   
  }
  state={
    documentos:[]
  }
  componentDidMount(){
      axios.get('http://10.17.12.218/ggnomotor/modules/documentos/services/Lista.php',{
        headers:{'Acces-Control-Allow-Origin':'*','Content-Type':'application/json'},
        responseType:'json',
      }).then(res=>{

        //  console.log(res.data)
        this.setState({documentos:res.data});
          
      });
    
  }
  render() {
   
    return (
      <div >
    
      <div className="container">
        <h3 >Documentos</h3>
     
        <TableView data={this.state.documentos} />
      
        </div>
      </div>
  
  
    );
  }
}

export default TodosDocumentos;
