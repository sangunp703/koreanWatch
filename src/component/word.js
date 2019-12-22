import React, { Component } from 'react'
import styled from 'styled-components'

var StyledWord = styled.span`
  color: #111;
  font-weight: bold;
  font-size: 4em;
  text-shadow: none;

  &.active {
    color: #eee;
    filter: blur(0px);
    text-shadow: 0 0 10px #7f55ff, 0 0 20px #7f55ff, 0 0 40px #7f55ff, 0 0 80px #7f55ff, 0 0 120px #7f55ff, 0 0 200px #7f55ff, 0 0 300px #7f55ff, 0 0 400px #7f55ff;
  }
`

export default class Word extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <StyledWord className="word">{this.props.word}</StyledWord>
  }
}
