import React, { Component } from 'react';
import './Dot.css';

export default class Dot extends Component {

  render() {
    let dotStyle = this.props.dotStyle;

    let CSSstyle = {
      right: this.props.dotSize/2,
      bottom: this.props.dotSize/2,
      width: `${this.props.dotSize}px`,
      height: `${this.props.dotSize}px`,
      backgroundImage: `url(images/${dotStyle}.png)`,
    }
    
    return (
      <div 
      className="dot-handle" 
      style={{
        left: `${this.props.position.xPos}%`,
        top: `${this.props.position.yPos}%`
        }}>
        <div  
        className="Dot" 
        style={CSSstyle}></div>
      </div>
    )
  }
}