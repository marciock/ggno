import React,{Component} from 'react';
import {Row} from 'react-materialize';



class Circle extends Component{
    render(){
        return (
            <div >
                <Row style={{textAlign:'center'}}>
                    <img src={this.props.img} />
                    <h4 >{this.props.text}</h4>
                </Row>
            </div>
        );
    }
}

export default Circle;