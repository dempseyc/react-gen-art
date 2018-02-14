import React, { Component } from 'react'
import DisplayLayer from './DisplayLayer'

export default class Display extends Component {

constructor(props) {
	super(props);

	this.displayLayers = [];

	for (let num=1; num<=this.props.data.numLayers; num++) {
		this.displayLayers.push(num);
	}

	this.makeDisplayLayers.bind(this);

}

// componentWillReceiveProps() {
// 	this.setState({
// 		layers: this.props.data.layers
// 	})
// }

makeDisplayLayers() {
	return this.displayLayers.map( (num) => {
		return (
		<DisplayLayer 
			key={num-1} 
			layerNum={num}
			data={this.props.data}
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
