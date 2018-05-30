import React, { Component } from 'react';
import './LayerPanel.css';

export default class DotQtyChooser extends Component {

  constructor(props) {
    super(props);
    this.layer = this.props.layerNum;
    this.state = {
      value: 5
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    }, this.props.data.updateDotQty(event.target.value,this.layer));
  }

  render() {
    return (
      <form className="DotQtyChooser">
        <label>Dot Qty.</label>
        <select value={this.state.value} onChange={this.handleChange} >
          <option value='3'>3</option>
          <option value='6'>6</option>
          <option default value='12'>12</option>
          <option value='24'>24</option>
        </select>
      </form>
    )
  }
}