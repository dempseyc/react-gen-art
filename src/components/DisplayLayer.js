import React, { Component } from 'react'
import Dot from './Dot'

export default class DisplayLayer extends Component {

  constructor(props) {
    super(props);
  }

  makeDots() {
    console.log(this.props.data, "data in dl");
    return(
      this.props.data.data.map((d,i)=>{
        return (
          <Dot 
              key={i}
              dotColor={this.props.layers[this.props.layerNum-1].dotColor}
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