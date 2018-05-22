import React, { Component } from 'react';


class TableView extends Component {

     

        

  render() {
    
    
    return (
        <div className="container">
          <table className="highlight">
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
               return ( <tr key={i}><a href={f.arquivo}>
               
                <td>{f.data}</td>
                <td>{f.titulo}</td>
                <td>{f.chave}</td>
                
                </a> </tr>)
               })
             
                
             }
          </tbody>
          </table> 
      </div>
    );
  }
}

export default TableView;
