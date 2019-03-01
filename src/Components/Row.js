import React from 'react'
import Peg from './Peg'
import ScorePeg from './ScorePeg'
import '../App.css';

function Row(props) {
	return <div className="row frame">
		<div className="pinHoleRow">
			<Peg/>
			<Peg/>
			<Peg/>
			<Peg/>
		</div>
		<div className="check">
			<div className="checkBox"></div>
		</div>
	</div>
}

export default Row
