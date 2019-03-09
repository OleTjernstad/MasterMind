import React from 'react'
import Peg from './Peg'
import ScorePeg from './ScorePeg'
import '../App.css';

function Row(props) {
	return <div className="row frame">
		<div className="pinHoleRow">
			<Peg rowID={props.rowID} peg="peg1" colIndex={props.rowState.peg1} onClickPeg={props.onClickPeg}/>
			<Peg rowID={props.rowID} peg="peg2" colIndex={props.rowState.peg2} onClickPeg={props.onClickPeg}/>
			<Peg rowID={props.rowID} peg="peg3" colIndex={props.rowState.peg3} onClickPeg={props.onClickPeg}/>
			<Peg rowID={props.rowID} peg="peg4" colIndex={props.rowState.peg4} onClickPeg={props.onClickPeg}/>

		</div>
		<div className="check">
			<div className="checkBox">
				{
					props.rowState.editable
						? <button onClick={() => props.onClickCheckButton(props.rowID)}>Check</button>
						: <div>
								<ScorePeg colIndex={props.rowState.score1}/>
								<ScorePeg colIndex={props.rowState.score2}/>
								<ScorePeg colIndex={props.rowState.score3}/>
								<ScorePeg colIndex={props.rowState.score4}/>
							</div>
				}
			</div>
		</div>
	</div>
}

export default Row
