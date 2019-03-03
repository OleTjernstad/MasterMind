import React from 'react'
import Row from './Row'
import ColorPicker from './ColorPicker'
import '../App.css';

class Board extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			showColorPicker: false,
			colorPickerPlace: {},
			1: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0
			},
			2: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0
			},
			3: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0
			},
			4: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0
			},
			5: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0
			},
			6: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0
			},
			7: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0
			},
			8: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0
			},
			9: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0
			},
			10: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0
			},
			11: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0
			},
			12: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0
			}
		}

	}

	onClickPeg = (event) => {
		const peg = event.target
		const position = peg.getBoundingClientRect()
		this.setState({colorPickerPlace: position})
		this.setState({showColorPicker: true})
	}

	render() {
		const rownums = [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12
		]

		const Rows = rownums.map(num => <Row onClickPeg={this.onClickPeg} rowState={this.state[num]} key={num}/>)
		return <div>
			<ColorPicker showColorPicker={this.state.showColorPicker} colorPickerPlace={this.state.colorPickerPlace}/>
			<div className="board">{Rows}</div>
		</div>
	}
}

export default Board
