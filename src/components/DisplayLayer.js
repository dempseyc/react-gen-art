import React, { Component } from 'react'
import Dot from './Dot'

export default class DisplayLayer extends Component {

  render() {
    let position = {x: 20, y: 20};
    return (
      <div className="DisplayLayer">
        <Dot 
        dotStyle={this.props.layers[this.props.layerNum-1].dotStyle} 
        size="50" position={position} 
        ></Dot>
      </div>
    )
  }
}