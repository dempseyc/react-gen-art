import React, { Component } from 'react'
import Dot from './Dot'

export default class DisplayLayer extends Component {

  render() {
    let position = {x: 200, y: 200};
    return (
      <div className="DisplayLayer">
        <Dot 
          dotStyle={this.props.layers[this.props.layerNum-1].dotStyle} 
          dotSize={this.props.layers[this.props.layerNum-1].dotSize} 
          position={position}
        ></Dot>
      </div>
    )
  }
}