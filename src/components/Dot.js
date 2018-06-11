import React, { Component } from 'react';
import './Dot.css';

export default class Dot extends Component {

  render() {

    let innerColor = `${this.props.dotColor}`;
    let outerColor = `${this.props.dotColor}`;
    let opacity = `0`;
    let dotStyle = this.props.dotStyle;
    let radius = `${this.props.dotSize / 2}`;
    let negRadius = `${0-this.props.dotSize / 2}`;
    let dotSize = `${this.props.dotSize}`;
    let viewBox = `0 0 ${dotSize} ${dotSize}`;
    let left = this.props.position.yPos

    return (
      <div
      className="dot-position"
      style={{
        left: `${this.props.position.xPos}%`,
        top: `${this.props.position.yPos}%`
      }}>
        <div
          className="dot-offset-radius"
          style={{
            left: `${negRadius}px`,
            top: `${negRadius}px`
        }}>
          <svg
            x={negRadius} 
            y={negRadius}
            width={dotSize}
            height={dotSize} 
            viewBox={viewBox}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="exampleGradient">
                <stop offset="0%" stop-color={innerColor}/>
                <stop offset="100%" stop-color={outerColor} stop-opacity={opacity}/>
              </radialGradient>
            </defs>

            <circle fill="url(#exampleGradient)" cx={radius} cy={radius} r={radius}/>
          </svg>
        </div>
      </div>
    )
  }
}