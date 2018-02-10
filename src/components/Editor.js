import React, { Component } from 'react'
// import DotStyleChooser from './DotStyleChooser'
import LayerButtons from './LayerButtons'
import LayerPanel from './LayerPanel'
import './Editor.css'

export default class Editor extends Component {

    constructor(props) {
        super(props);
        console.log(props, "props in editor");
        this.layers = [];
        for (let i=1;i<=this.props.data.numLayers;i++) {
            this.layers.push(i);
        }

        this.makeLayerPanels = this.makeLayerPanels.bind(this);
    }

    makeLayerPanels() {
        return this.layers.map((i) => {
            return(<LayerPanel key= {i} layerIdx= {i} data= {this.props.data} >{i}</LayerPanel>)
        })
    }

    render() {
        return (
        <div className="Editor">
            <LayerButtons  data= {this.props.data} ></LayerButtons>
            { this.makeLayerPanels() }
        </div>
        )
    }
}
