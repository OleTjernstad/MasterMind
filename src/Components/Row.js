import React from 'react'
import Peg from './Peg'
import ScorePeg from './ScorePeg'
import '../App.css';

function Row(props) {
	return <div className="row frame">
		<div className="pinHoleRow">
			<Peg colIndex={props.colIndex} onClickPeg={props.onClickPeg}/>
			<Peg colIndex={props.colIndex} onClickPeg={props.onClickPeg}/>
			<Peg colIndex={props.colIndex} onClickPeg={props.onClickPeg}/>
			<Peg colIndex={props.colIndex} onClickPeg={props.onClickPeg}/>
		</div>
		<div className="check">
			<div className="checkBox">
				<ScorePeg/>
				<ScorePeg/>
				<ScorePeg/>
				<ScorePeg/>
			</div>
		</div>
	</div>
}

export default Row
