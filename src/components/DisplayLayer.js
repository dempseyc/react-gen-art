import React, { Component } from 'react'
import Dot from './Dot'

export default class DisplayLayer extends Component {

  constructor(props) {
    super(props);
    this.layerNum = this.props.layerNum;

    // this.dotStyle = this.props.layers[this.layerNum-1].dotStyle;
    this.dotStyle = this.props.data.layers[this.layerNum-1].dotStyle;
  }

  componentWillReceiveProps() {
    // this.dotStyle = this.props.layers[this.layerNum-1].dotStyle;
    this.dotStyle = this.props.data.layers[this.layerNum-1].dotStyle;
    console.log(this.props.data.layers[this.layerNum-1].dotStyle, "in dl");
  }

  render() {
    let position = {x: 20, y: 20};
    return (
      <div className="DisplayLayer">
        <Dot dotStyle={this.dotStyle} size="50" position={position} ></Dot>
      </div>
    )
  }
}