import React, { Component } from 'react';
import './MiniSlider.css';

export default class MiniSlider extends Component {
    constructor (props){
        super(props);
        this.state = {
            value: "5"
        }
        this.handleChange.bind(this);
    }

    handleChange() {
        console.log("change");
    }

    render() {
        return (
        <input id="mini-input" type="range" min="5" max="350" step="5" value="5" onChange={this.handleChange}>
        <display id="mini-output"></display>
        )
    }


}