import React,{Component} from 'react';
import {Row} from 'react-materialize';



class Circle extends Component{
    render(){
        return (
            <div >
                <Row style={{textAlign:'center'}}>
                    <a href={this.props.href}>
                        <img src={this.props.img} style={{borderRadius:'10px'}}/>
                        <h4 >{this.props.text}</h4>
                    </a>
                </Row>
            </div>
        );
    }
}

export default Circle;