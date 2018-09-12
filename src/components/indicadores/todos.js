import React, { Component } from 'react';
import TableView from './TableView';

import axios from 'axios';

class TodosIndicadores extends Component {
  constructor(){
    super();
   
   
  }
  state={
    db:[]
  }
  componentDidMount(){
      axios.get('http://10.17.12.218/ggnomotor/modules/indicadores/services/Lista.php',{
        headers:{'Acces-Control-Allow-Origin':'*','Content-Type':'application/json'},
        responseType:'json',
      }).then(res=>{

        //  console.log(res.data)
        this.setState({db:res.data});
          
      });
    
  }
  render() {
   
    return (
      <div >
    
      <div className="container">
        <h3 >Indicadores</h3>
     
        <TableView data={this.state.db} />
      
        </div>
      </div>
  
  
    );
  }
}

export default TodosIndicadores;
