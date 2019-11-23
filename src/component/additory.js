import React, {Component} from 'react'
import styled from 'styled-components'
import Word from './word'

const StyledAdditory = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-row: 1/6;
  justify-items: center;
  align-items: center;
  grid-gap: 10px;
`

export default class Additory extends Component {
  constructor(props){
    super(props)
  }
  componentWillUpdate(){
    const additory = document.querySelector('.additory')
    const words = additory.querySelectorAll('.word')
    for(let i = 0; i < words.length; i++){
      words[i].classList.remove("active")
    }
    if(this.props.time.getHours()%12 === 0 && this.props.time.getMinutes() === 0){
      if(this.props.time.getHours() === 0){
        words[3].classList.add("active")
        words[4].classList.add("active")
      } else{
        words[4].classList.add("active")
        words[5].classList.add("active")
      }
    } else{
      if(this.props.time.getMinutes()%10 === 5){
        words[5].classList.add("active")
      }
      if(this.props.time.getMinutes() === 0){
        words[4].classList.add("active")
      }
      if(this.props.time.getHours()<12){
        words[0].classList.add("active")
        words[1].classList.add("active")
      } else {
        words[0].classList.add("active")
        words[2].classList.add("active")
      }
    }
  }
  render(){
    return (
      <StyledAdditory className="additory">
        <Word active word="오"/>
        <Word word="전"/>
        <Word word="후"/>
        <Word word="자"/>
        <Word word="정"/>
        <Word word="오"/>
      </StyledAdditory>
    )
  }
}