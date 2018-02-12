import React, { Component } from 'react'
import DotStyleChooser from './DotStyleChooser'
import './LayerPanel.css'

export default class LayerPanel extends Component {

    constructor(props) {
        super(props);

        this.state= {
            amActive: this.props.reportActiveLayer(this.props.layerIdx)
        }
        
        this.reportMyStatus = this.reportMyStatus.bind(this);
    }

    componentWillReceiveProps() {
        this.setState({
            amActive: this.props.reportActiveLayer(this.props.layerIdx)
        })
    }
    

    reportMyStatus() {
        if (this.props.layerIdx===this.props.activeLayer) {
            console.log(`my idx is ${this.props.layerIdx} and i ${this.state.amActive} active`);
        } else {
            console.log(`my idx is ${this.props.layerIdx} and i ${this.state.amActive} active`);
        }
    }

    render() {
        let classnames = `LayerPanel l-${this.props.layerIdx} active-${this.state.amActive}`;
        // this.reportMyStatus();
        return (
            <div  
            className={ classnames }
            >
                <DotStyleChooser
                    data= {this.props.data}
                    styleRange= {this.props.data.styleRange}
                ></DotStyleChooser>
            </div>
        )
    }
}