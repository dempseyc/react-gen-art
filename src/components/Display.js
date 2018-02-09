import React, { Component } from 'react';
import Dot from './Dot';
import './Display.css';

export default class Display extends Component {
  render() {
    let position = {x: 20, y: 20};
    let dotStyle = this.props.data.dotStyle;
    return (
      <div className="Display">
        <Dot dotStyle={dotStyle} size="50" position={position} ></Dot>
      </div>
    )
  }
}
