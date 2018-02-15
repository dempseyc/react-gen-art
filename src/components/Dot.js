import React, { Component } from 'react';
import './Dot.css';

export default class Dot extends Component {

  render() {
    let dotStyle = this.props.dotStyle;
    let classes = `Dot d-${this.props.dotSize}`;
    let CSSstyle = {
      backgroundImage: `url(images/${dotStyle}.png)`,
      }
    return (
      <div 
      className="dot-handle" 
      style={{left: this.props.position.x-this.props.dotSize/2,
        top: this.props.position.y-this.props.dotSize/2 }}>
        <div className ={classes} style={CSSstyle}></div>
      </div>
    )
  }
}