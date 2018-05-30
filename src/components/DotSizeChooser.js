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
        <select value={this.state.value} onChange={this.handleChange} >
          <option value='50'>50px</option>
          <option value='130'>130px</option>
          <option default value='340'>340px</option>
          <option value='890'>890px</option>
        </select>
      </form>
    )
  }
}