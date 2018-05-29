import React, { Component } from 'react';
import {Table} from 'react-materialize';

class TableView extends Component {

     

        

  render() {
    
    
    return (
        <div >
          <Table className="highlight striped">
            <thead>
              <tr>
                  <th>Data </th>
                  <th>Título</th>
                  <th>Descricao</th>
                 
                 
              </tr>
            </thead>

            <tbody>

             { 
               this.props.data.map((f,i)=>{
               return ( <tr key={i}>
               
                <td><a href={f.arquivo}>{f.data} </a></td>
                <td><a href={f.arquivo}>{f.titulo}</a></td>
                <td><a href={f.arquivo}>{f.descricao}</a></td>
                
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
