import React, {Component} from 'react'
import styled from 'styled-components'

var StyledWord = styled.span`
  color: #111;
  font-weight: bold;
  font-size: 4em;

  &.active{
    color: white;
  }
`

export default class Word extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <StyledWord className="word">
        {this.props.word}
      </StyledWord>
    )
  }
}