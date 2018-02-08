import React, { Component } from 'react';
import './Display.css';

export default class Display extends Component {
  render() {
    return (
      <div className="Display">
        <div className ="Dot" style={{background: this.props.data.color}}></div>
      </div>
    )
  }
}
