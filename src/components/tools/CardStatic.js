import React,{Component} from 'react';
import {CardTitle,Card} from 'react-materialize/lib/CardTitle';
import {Link} from 'react-router-dom';

class CardStatic extends Component{

    render(){

        return(
        <Card className={this.props.size}
            header={<CardTitle imgae={this.props.image}>{this.props.title}</CardTitle>}
            actions={[<Link to={this.props.url}>{this.props.text}</Link>]}>
            {this.props.content}
        </Card>
            
        )
    }
}
export default CardStatic;