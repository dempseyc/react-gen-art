import React, { Component } from 'react'
import Dot from './Dot'

export default class DisplayLayer extends Component {

  ranPos(min,max) {
    return Math.floor(Math.random()*max)+min;
  }

  makeDots() {
    let numDots = 5;
    let DotContainer = [];
    for(let i = 0; i<numDots; i++) {
      DotContainer.push({x: this.ranPos(0,100), y: this.ranPos(0,100)});
    }
    return(
      DotContainer.map((d,i)=>{
        return (
          <Dot 
              key={i}
              dotStyle={this.props.layers[this.props.layerNum-1].dotStyle} 
              dotSize={this.props.layers[this.props.layerNum-1].dotSize} 
              position={d}
            ></Dot>
        )
      })
    );
  }

  render() {
    return (
      <div className="DisplayLayer">
        {this.makeDots()}
      </div>
    )
  }
}