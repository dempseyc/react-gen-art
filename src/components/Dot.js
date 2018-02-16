import React, { Component } from 'react';
import './Dot.css';

export default class Dot extends Component {

  render() {
    let dotStyle = this.props.dotStyle;
    let classes = `Dot d-${this.props.dotSize}`;
    let CSSstyle = {
      right: this.props.dotSize/2,
      bottom: this.props.dotSize/2,
      backgroundImage: `url(images/${dotStyle}.png)`,
    }
    return (
      <div 
      className="dot-handle" 
      style={{
        left: `${this.props.position.x}%`,
        top: `${this.props.position.y}%`
        }}>
        <div 
        className ={classes} 
        style={CSSstyle}></div>
      </div>
    )
  }
}