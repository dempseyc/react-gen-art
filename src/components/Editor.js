import React, { Component } from 'react'
// import DotStyleChooser from './DotStyleChooser'
import LayerPanel from './LayerPanel'
import './Editor.css'

export default class Editor extends Component {

    constructor(props) {
        super(props);

        this.activeLayer = 1;

        this.buttons = [];
        for (let i=1;i<=this.props.data.numLayers;i++) {
            this.buttons.push(i);
        }
        this.layers = [];
        for (let i=1;i<=this.props.data.numLayers;i++) {
            this.layers.push(i);
        }
        this.makeButtons = this.makeButtons.bind(this);
        this.makeLayerPanels = this.makeLayerPanels.bind(this);
        this.updateActiveLayer = this.updateActiveLayer.bind(this);
    }

    makeButtons() {
        return this.buttons.map((i) => {
            return(<button key={i} onClick={ () => { this.updateActiveLayer(i) } } >{i}</button>)
        })
    }

    makeLayerPanels() {
        return this.layers.map((i) => {
            return(
               <LayerPanel 
                    key= {i} 
                    layerIdx= {i} 
                    data= {this.props.data} 
                    activeLayer= {this.activeLayer}
                >
                </LayerPanel> 
            )
        })
    }

    updateActiveLayer(numLayer) {
        console.log(numLayer);
        this.activeLayer = numLayer;
    }

    render() {
        return (
        <div className="Editor">

            <div className="LayerButtons">
                { this.makeButtons() }      
            </div>

            { this.makeLayerPanels() }

        </div>
        )
    }
}
