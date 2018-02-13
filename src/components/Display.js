import React, { Component } from 'react'
import DisplayLayer from './DisplayLayer'

export default class Display extends Component {

constructor(props) {
	super(props);

	this.layers = [];

	for (let num=1; num<=this.props.numLayers; num++) {
		this.layers.push(num);
	}

	this.makeDisplayLayers.bind(this);
}

makeDisplayLayers() {
	return this.layers.map( (num) => {
		return (
		<DisplayLayer 
			key={num-1} 
			layerNum={num}
			layers={this.props.layers}
			>
		</DisplayLayer>
		)
	}
)}

render() {
	return (
	<div className="Display">
		{ this.makeDisplayLayers() }
	</div>
	)
}
}
