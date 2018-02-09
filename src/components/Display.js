import React, { Component } from 'react';
import Dot from './Dot';
import './Display.css';

export default class Display extends Component {
  render() {
    let position = {x: 20, y: 20};
    let type = this.props.data.color;
    return (
      <div className="Display">
        <Dot type={type} size="50" position={position} ></Dot>
      </div>
    )
  }
}
