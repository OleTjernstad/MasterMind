import React from 'react'
import ColorScheme from './ColorScheme'
import '../App.css';

function Peg(props) {
  return <div onClick = {
    props.onClickPeg
  }
  style = {
    {
      backgroundColor: ColorScheme[props.colIndex]
    }
  }
  className = "box pinhole" > < /div>
}

export default Peg
