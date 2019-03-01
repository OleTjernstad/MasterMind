import React from 'react'
import Peg from './Peg'
import ScorePeg from './ScorePeg'
import '../App.css';

function Row(props){
   return <div  className="row frame">Hello {props.name}</div>
}

export default Row
