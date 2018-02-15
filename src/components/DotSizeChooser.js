import React, { Component } from 'react';
import './LayerPanel.css';

export default class DotSizeChooser extends Component {

  constructor(props) {
    super(props);
    this.layer = this.props.layerNum;
    this.state = {
      value: 130
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    }, this.props.data.updateDotSize(event.target.value,this.layer));
  }

  handleSubmit(event) {
    // alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
    this.props.data.updateDotSize(this.state.value,this.layer);
  }

  render() {
    return (
      // 
      // <form onSubmit={this.handleSubmit}>
      <form>
        <select value={this.state.value} onChange={this.handleChange} >
          <option value='50'>50px</option>
          <option value='80'>80px</option>
          <option default value='130'>130px</option>
          <option value='210'>210px</option>
        </select>
        {/* <input type="submit" value="Submit" /> */}
      </form>
    )
  }
}