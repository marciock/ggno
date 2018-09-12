import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import './NavBar.css';
//material ui
import {Navbar,NavItem} from 'react-materialize';



class NavBar extends Component {
    
    render() {
      const imagem={marginLeft:'2em',width:'6em',marginTop:'0.3em'};
      
    return (
      
       <Navbar brand={<img src="images/ggno_logo.png" style={imagem} alt="teste"/>}  right className='blue acent-3'>
          <NavItem  href="#/">Inicio</NavItem>
          <NavItem  href="#/agenda">Agenda</NavItem>
          <NavItem  href="#/comites">Comitês Técnicos</NavItem>
          <NavItem  href="#/todosdocumentos">Documentos</NavItem>
          <NavItem  href="http://intra.sanepar.com.br">Intranet</NavItem>
          <NavItem  href="http://webmail.sanepar.com.br" >Webmail</NavItem>
          
         
        </Navbar> 
         
      

      
    );
  }
}

export default NavBar;

