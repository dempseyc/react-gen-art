import React, { Component } from 'react';
import './Dot.css';

export default class Dot extends Component {

  render() {

    let dotColor = `${this.props.dotColor}`;
    let dotStyle = this.props.dotStyle;
    let radius = `${this.props.dotSize / 4}px`;


    let CSSstyle = {
      // right: this.props.dotSize/2,
      // bottom: this.props.dotSize/2,
      borderRadius:  `${this.props.dotSize}px`,
      width: `2px`,
      height: `2px`,
      // backgroundImage: `url(images/${dotStyle}.png)`,
      boxShadow: `0px 0px ${radius} ${radius} ${dotColor}`,
      background: `${dotColor}`
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