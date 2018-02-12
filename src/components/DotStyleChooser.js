import React, { Component } from 'react';
import './LayerPanel.css';

export default class DotStyleChooser extends Component {

  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      expanded: false,
      chosenDotStyle: this.props.data.chosenDotStyle
    }
    this.dotStyles = this.props.styleRange;
    this.makeButtons = this.makeButtons.bind(this);
    this.changeDotStyle = this.changeDotStyle.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getChosenStatus(dotStyle) {
  }

  makeButtons (dotStyles) {
    let choiceStatus = "expanded";
    return dotStyles.map( (dotStyle, i) => {
      if (this.state.expanded===true) {
        choiceStatus = "expanded";
      } else if (this.state.chosenDotStyle===dotStyle) {
        choiceStatus = "am-chosen";
      } else {
        choiceStatus = "am-not-chosen";
      }
      let classnames = `style-button ${choiceStatus}`;
      let CSSstyle = {backgroundImage: `url(images/${dotStyle}.png)`}
        return (<button 
          key={i} 
          style={CSSstyle} 
          className={classnames}
          onClick={ () => { this.changeDotStyle(dotStyle) } } 
        >{dotStyle}</button>)
    })
  }

  changeDotStyle(style) {
    this.props.data.updateDotStyle(style);
    this.setState({
      chosenDotStyle: style
    })
  }

  handleClick() {
    if(this.state.expanded===true) {
      this.setState({
        expanded: false
      })
    } else {
      this.setState({
        expanded: true
      })
    }
  }

  render() {
    return (
      <div 
        className="DotStyleChooser"
        onClick={this.handleClick}
        >
        { this.makeButtons(this.dotStyles) }
      </div>
    )
  }
}