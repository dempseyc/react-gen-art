import React, { Component } from 'react'
import DisplayLayer from './DisplayLayer'

export default class Display extends Component {

constructor(props) {
	super(props);

	this.layers = [];

	for (let i=1;i<=this.props.data.numLayers;i++) {
		this.layers.push(i);
	}

	this.makeDisplayLayers.bind(this);
	console.log(this.props.data);

}

makeDisplayLayers() {
	return this.layers.map( (i) => {
		return (
		<DisplayLayer 
			key={i} 
			layerNumber = {i}
			data= { this.props.data }
			dotStyle= {this.props.data.dotStyle}
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
