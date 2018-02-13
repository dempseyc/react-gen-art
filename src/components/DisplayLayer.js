import React, { Component } from 'react'
import Dot from './Dot'

export default class DisplayLayer extends Component {

  constructor(props) {
    super(props);
    this.layerNum = this.props.layerNum;
    this.state = {
      dotStyle: this.props.layers[this.layerNum-1].dotStyle
    };
  }

  componentWillReceiveProps() {
    this.setState({
      dotStyle: this.props.layers[this.layerNum-1].dotStyle
    })
  }

  render() {
    let position = {x: 20, y: 20};
    return (
      <div className="DisplayLayer">
        <Dot dotStyle={this.state.dotStyle} size="50" position={position} ></Dot>
      </div>
    )
  }
}