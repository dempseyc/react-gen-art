import React, { Component } from 'react';
import './Dot.css';

export default class LayerButtons extends Component {

    constructor(props) {
        super(props);
        console.log(props, "props in layer buttons");
        this.buttons = [];
        for (let i=1;i<=this.props.data.numLayers;i++) {
            this.buttons.push(i);
        }

        this.makeButtons = this.makeButtons.bind(this);
        this.activateLayer = this.activateLayer.bind(this);
    }

    makeButtons() {
        return this.buttons.map((i) => {
            return(<button key={i} onClick={ () => { this.activateLayer(i) } } >{i}</button>)
        })
    }

    activateLayer(num) {
        this.props.data.updateLayerActive(num);
    }

    render() {

        return (
            <div className="LayerButtons">
            { this.makeButtons() }      
            </div>
        )
  }
}