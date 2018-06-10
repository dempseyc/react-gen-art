// based from:
// https://codepen.io/_danko/pen/JKaxKE?editors=0010

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './MiniSlider.scss';

// const { render } = ReactDOM
export default class DotColorChooser extends Component {
  constructor(props) {
    super(props);

    this.layer = this.props.layerNum;

    this.state = {
        expanded: false,
        dotColor: this.props.data.layers[this.layer-1].dotColor,
        red: 165,
        green: 57,
        blue: 230,
        alpha: 1
    };

    this.changeDotStyle = this.changeDotStyle.bind(this);

  }

  changeDotStyle(style,layer) {
    // from update props.data up to container
    this.setState({
      dotStyle: style
    }, this.props.data.updateDotStyle(style,layer) )
  }

  changeDotColor(color,layer) {
      this.setState({
          dotColor: color
      }, this.props.data.updateDotColor(color,layer) )
  }

  update(e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.input).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.input).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.input).value,
      alpha: ReactDOM.findDOMNode(this.refs.alpha.refs.input).value
    });
    const dc = (this.state.alpha === 1)
                  ? `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`
                  : `rgba(${this.state.red}, ${this.state.green}, ${this.state.blue}, ${this.state.alpha})`;
    this.changeDotColor(dc,this.layer);
  }
  render() {
    
    return (
      <div className="DotColorChooser">
        <div className="dc-heading" style={{backgroundColor: `${this.state.dotColor}`}}>DOT COLOR</div>        
        <Slider ref="red" min="0" max="255" col="red" val={this.state.red} update={() => this.update()} >{this.state.red}</Slider>         
        <Slider ref="green" min="0" max="255" col="green" val={this.state.green} update={() => this.update()} >{this.state.green}</Slider> 
        <Slider ref="blue" min="0" max="255" col="blue" val={this.state.blue} update={() => this.update()} >{this.state.blue}</Slider>
        <Slider ref="alpha" min="0" max="1" col="alpha" step="0.01" val={this.state.alpha} update={() => this.update()} >{this.state.alpha}</Slider>
      </div>
    );
  }
}

class Slider extends React.Component {
  render() {
    return (
      <div className="channel">
        <label className="mini-output">{this.props.col}: {this.props.children}</label>
          <input
            className="mini-input"
            ref="input" 
            value={this.props.val} 
            type="range" 
            min={this.props.min} 
            max={this.props.max} 
            step={this.props.step} 
            onChange={this.props.update} 
          /> 
     </div>
    )
  }
}