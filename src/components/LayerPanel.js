import React, { Component } from 'react'
import DotStyleChooser from './DotStyleChooser'
import './LayerPanel.css'

export default class LayerPanel extends Component {

    constructor(props) {
        super(props);

        this.state= {
            amActive: this.props.reportActiveLayer(this.props.layerNum)
        }
        
        // this.reportMyStatus = this.reportMyStatus.bind(this);
    }

    componentWillReceiveProps() {
        this.setState({
            amActive: this.props.reportActiveLayer(this.props.layerNum)
        })
    }
    
    // reportMyStatus() {
    //     if (this.props.layerNum===this.props.activeLayer) {
    //         console.log(`my idx is ${this.props.layerNum} and i ${this.state.amActive} active`);
    //     } else {
    //         console.log(`my idx is ${this.props.layerNum} and i ${this.state.amActive} active`);
    //     }
    // }

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
                ></DotStyleChooser>
            </div>
        )
    }
}