import React, { Component } from 'react';

import {Parallax} from 'react-materialize';


class MyParalax extends Component {
    
    render() {
      
      
    return (
        <div>
            <Parallax imageSrc="images/paralax.jpg"  alt/>
                <div className="section white">
                  <div className="row container">
                    
                  </div>
                </div>
           
            <Parallax imageSrc="images/paralax2.jpg" alt />

        </div>
      
      
    );
  }
}

export default MyParalax;

