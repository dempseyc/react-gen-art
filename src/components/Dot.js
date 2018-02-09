import React, { Component } from 'react';
import './Dot.css';

export default class Dot extends Component {

  render() {
    let type = this.props.type;
    let size = this.props.size;
    let position = this.props.position;
    let classes = `Dot d-${type} d-${size}`;
    return (
      <div  
      className="dot-handle" 
      style={{ left: position.x-size/2, top: position.y-size/2 }}>
        <div className ={classes}></div>
      </div>
    )
  }
}