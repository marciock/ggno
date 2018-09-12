import React, { Component } from 'react';
import {Table} from 'react-materialize';

class TableView extends Component {

     

        

  render() {
    
    
    return (
        <div >
          <Table className="highlight striped">
            <thead>
              <tr>
                  <th>Título</th>
                  <th>Descrição</th>
                  <th>Período</th>
                 
                 
              </tr>
            </thead>

            <tbody>

             { 
               this.props.data.map((f,i)=>{
               return ( <tr key={i}>
               
               <td><a href={f.arquivo}>{f.titulo}</a></td>
               <td><a href={f.arquivo}>{f.descricao}</a></td>
              <td><a href={f.arquivo}> {f.mes}/{f.ano}</a></td>
                
                 </tr>)
               })
             
                
             }
          </tbody>
          </Table> 
      </div>
    );
  }
}

export default TableView;
