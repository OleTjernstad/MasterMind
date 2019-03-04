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
			peg: {},
			1: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0,
				editable: 1
			},
			2: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0,
				editable: 0
			},
			3: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0,
				editable: 0
			},
			4: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0,
				editable: 0
			},
			5: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0,
				editable: 0
			},
			6: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0,
				editable: 0
			},
			7: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0,
				editable: 0
			},
			8: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0,
				editable: 0
			},
			9: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0,
				editable: 0
			},
			10: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0,
				editable: 0
			},
			11: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0,
				editable: 0
			},
			12: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0,
				editable: 0
			}
		}

	}

	onClickPeg = (event, key, pegID) => {
		const peg = event.target;
		console.log(event)
		console.log(key)
		console.log(pegID)
		const position = peg.getBoundingClientRect()
		this.setState({peg: peg})
		this.setState({colorPickerPlace: position})
		this.setState({showColorPicker: true})
	}

	onClickColor = (colIndex) => {
		console.log(colIndex)
		console.log(this.state.peg.index)
	}

	noop = () => {}

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

		const Rows = rownums.map(num => <Row onClickPeg={(
				this.state[num].editable)
				? this.onClickPeg
				: this.noop} rowState={this.state[num]} rowID={num} key={num}/>)
		return <div>
			<ColorPicker onClickColor={this.onClickColor} showColorPicker={this.state.showColorPicker} colorPickerPlace={this.state.colorPickerPlace}/>
			<div className="board">{Rows}</div>
		</div>
	}
}

export default Board
