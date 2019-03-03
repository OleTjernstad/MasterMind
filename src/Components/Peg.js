import React from 'react'
import '../App.css';

function Peg(props){
   return <div onClick={props.onClickPeg} className="box pinhole"></div>
}

export default Peg
