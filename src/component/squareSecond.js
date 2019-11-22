import React, {Component} from 'react'
import styled from 'styled-components'
var ProgressBar = require('progressbar.js')

const SquareSecond = styled.svg`
  width: 700px;
  height: 700px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default class Hour extends Component {
  constructor(props){
    super(props)
  }
  componentWillUpdate(){
    var bar = new ProgressBar.Path('#secondLine', {
      easing: 'easeInOut',
      duration: 2000
    });
    
    bar.set(this.props.time.getSeconds()/60);
    bar.animate(this.props.time.getSeconds()/60);
  }
  render(){
    return (
      <SquareSecond xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
        <path fill-opacity="0" stroke="#111" stroke-width="2" d="m 50 1 h 40 a 10 10 0 0 1 9 10 v 80 a 10 10 0 0 1 -10 8 h -80 a 10 10 0 0 1 -8 -10 v -80 a 10 10 0 0 1 10 -8 h 40 "/>
	      <path id="secondLine" fill-opacity="0" stroke="white" stroke-width="2" d="m 50 1 h 40 a 10 10 0 0 1 9 10 v 80 a 10 10 0 0 1 -10 8 h -80 a 10 10 0 0 1 -8 -10 v -80 a 10 10 0 0 1 10 -8 h 40 "/>
      </SquareSecond>
    )
  }
}