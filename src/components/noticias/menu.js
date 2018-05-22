import React,{Component} from 'react';
import {Card,CardTitle,Row,Col} from 'react-materialize';
import axios from 'axios';
class Menu extends Component{
    constructor(){
        super();
        this.handleClick=this.handleClick.bind(this);
    }
    state={
        noticias:[]
    }
    componentDidMount(){
       
      
    }
    handleClick(){
        let url=this.props.url;
        axios.get(url,{
            headers:{'Acces-Control-Allow-Origin':'*','Content-Type':'application/json'},
            responseType:'json',
          }).then(res=>{
    
              console.log(res.data)
            this.setState({noticias:res.data});
              
          });

    }
    
    render(){
        return (<a href="javascript:void(0)" onClick={this.handleClick}>{this.props.title}</a>
            );
    }
}
export default Menu;

//http://localhost/ggnomotor/modules/noticias/services/Maringa.php