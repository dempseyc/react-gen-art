import React, { Component } from 'react';

export default class LayerPanel extends Component {

    constructor(props) {
        super(props);
        console.log("layer", this.props.layerIdx);
    }

    render() {
        return (
            <div  
            className="LayerPanel" 
            >
            </div>
        )
    }
}