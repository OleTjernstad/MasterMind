import React from 'react'
import ColorScheme from './ColorScheme'
import '../App.css';

function Peg(props) {
	return <div onClick={(event) => props.onClickPeg(event, props.rowID, props.peg)} style={{
			backgroundColor: ColorScheme[props.colIndex]
		}} className="box pinhole"></div>
}

export default Peg
