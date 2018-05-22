import React,{Component} from 'react';
import {CardTitle,Card} from 'react-materialize/lib/CardTitle';
import {Link} from 'react-router-dom';

class CardReveal extends Component{

    render(){

        return(
        <Card 
            header={<CardTitle reveal image={this.props.image} waves='light'/>}
            title={this.props.title}
            reveal={<p>{this.props.content}</p>}>
            <p><Link to={this.props.url}>{this.props.text}</Link></p>
           
        </Card>
            
        )
    }
}
export default CardReveal;