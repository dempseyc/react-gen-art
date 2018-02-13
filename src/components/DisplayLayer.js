import React, { Component } from 'react'
import Dot from './Dot'

export default class DisplayLayer extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    let position = {x: 20, y: 20};
    let dotStyle = this.props.dotStyle;
    return (
      <div className="DisplayLayer">
        <Dot data= {this.props.data } dotStyle={dotStyle} size="50" position={position} ></Dot>
      </div>
    )
  }
}