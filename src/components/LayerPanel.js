import React, { Component } from 'react'
import DotStyleChooser from './DotStyleChooser'
import DotSizeChooser from './DotSizeChooser'
import DotQtyChooser from './DotQtyChooser'
import DotAlgoChooser from './DotAlgoChooser'
import DotColorChooser from './DotColorChooser'
import './LayerPanel.css'

export default class LayerPanel extends Component {

constructor(props) {
    super(props);

    this.state= {
        amActive: this.props.reportActiveLayer(this.props.layerNum)
    }

  }

  componentWillReceiveProps() {
    this.setState({
        amActive: this.props.reportActiveLayer(this.props.layerNum)
    })
  }

  render() {
    let classnames = `LayerPanel l-${this.props.layerNum} active-${this.state.amActive}`;
    // this.reportMyStatus();
    return (
      <div  
      className={ classnames }
      >
        <DotStyleChooser
            layerNum = {this.props.layerNum}
            data= {this.props.data}
            styleRange= {this.props.data.styleRange}
        >
        </DotStyleChooser>
        <DotSizeChooser
            layerNum = {this.props.layerNum}
            data= {this.props.data}
        >
        </DotSizeChooser>
        <DotQtyChooser
            layerNum = {this.props.layerNum}
            data= {this.props.data}
        >
        </DotQtyChooser>
        <br></br>
        <DotAlgoChooser
            layerNum = {this.props.layerNum}
            data= {this.props.data}
        >
        </DotAlgoChooser>
        <DotColorChooser />
      </div>
    )
  }
}