import React, { Component } from 'react';
import './LayerPanel.css';
import './MiniSlider.scss';

export default class DotSizeChooser extends Component {

  constructor(props) {
    super(props);
    this.layer = this.props.layerNum;
    this.state = {
      value: 5
    };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    }, this.props.data.updateDotSize(event.target.value,this.layer));
  }

  render() {
    return (

      <form>
        <label>Dot Size</label>
          <DotSizeSlider ref={this.layer+"-dot-size"} min="5" max="850" val={this.state.value} update={(e) => this.handleChange(e)} >{this.state.value}</DotSizeSlider>
      </form>
    )
  }
}

class DotSizeSlider extends React.Component {
  render() {
    return (
      <div className="dot-size-slider">
        <label className="mini-output">{this.props.col}: {this.props.children}</label>
          <input
            className="mini-input"
            ref={this.layer+"-dot-size-input"}
            value={this.props.val}
            type="range" 
            min={this.props.min} 
            max={this.props.max} 
            step={5} 
            onChange={this.props.update} 
          /> 
     </div>
    )
  }
}