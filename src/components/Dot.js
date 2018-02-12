import React, { Component } from 'react';
import './Dot.css';

export default class Dot extends Component {

  render() {
    let dotStyle = this.props.dotStyle;
    let size = this.props.size;
    let position = this.props.position;
    let classes = `Dot d-${size}`;
    let CSSstyle = {
      backgroundImage: `url(images/${dotStyle}.png)`,
      }
    return (
      <div  
      className="dot-handle" 
      style={{left: position.x-size/2, 
        top: position.y-size/2 }}>
        <div className ={classes} style={CSSstyle}></div>
      </div>
    )
  }
}