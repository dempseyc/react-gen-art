import React, { Component } from 'react'
import LayerButton from './LayerButton'
import LayerPanel from './LayerPanel'
import './Editor.css'

export default class Editor extends Component {

    constructor(props) {
        super(props);

        this.layers = [];

        for (let i=1;i<=this.props.data.numLayers;i++) {
            this.layers.push(i);
        }

        this.state= {
            activeLayer: 1
        }

        this.makeButtons = this.makeButtons.bind(this);
        this.makeLayerPanels = this.makeLayerPanels.bind(this);
        this.updateActiveLayer = this.updateActiveLayer.bind(this);

    }
    
    componentDidMount() {
        this.updateActiveLayer(this.state.activeLayer);
    }

    makeButtons() {

        return this.layers.map((i) => {
            return(
                <LayerButton 
                    key={i} 
                    layerIdx= {i} 
                    handleClick= { () => {
                        this.updateActiveLayer(i);
                     } }
                    activeLayer= {this.state.activeLayer}
                    reportActiveLayer= {this.reportActiveLayer.bind(this)}
                >
                </LayerButton>
            )
        })
    }

    makeLayerPanels() {
        return this.layers.map((i) => {
            return(
               <LayerPanel 
                    key= {i} 
                    layerIdx= {i} 
                    data= {this.props.data} 
                    activeLayer= {this.state.activeLayer}
                    reportActiveLayer= {this.reportActiveLayer.bind(this)}
                >
                </LayerPanel> 
            )
        })
    }

    updateActiveLayer(numLayer) {
        this.setState({
            activeLayer: numLayer
        }, ()=>{
            console.log(this.state.activeLayer);
        })
    }

    reportActiveLayer(numLayer) {
        if (numLayer===this.state.activeLayer) {
            return "am";
        } else {
            return "am-not";
        }
    }

    render() {
        return (
        <div className="Editor">

            <div className="LayerButtons">
                { this.makeButtons() }      
            </div>
            <div className="layerPanels">
                { this.makeLayerPanels() }
            </div>

        </div>
        )
    }
}
