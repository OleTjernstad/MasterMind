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

	ifAllColorsSelected = () => {
		if (this.state.peg.hasOwnProperty('rowID')) {
			let pegs = this.state[this.state.peg.rowID]
			console.log(pegs)
			if (pegs.peg1 > 0 && pegs.peg2 > 0 && pegs.peg3 > 0 && pegs.peg4 > 0) {}
		}
	}

	onClickPeg = (event, rowID, pegID) => {
		const peg = event.target;
		const position = peg.getBoundingClientRect()
		this.setState({
			peg: {
				rowID: rowID,
				pegID: pegID
			}
		})
		this.setState({colorPickerPlace: position})
		this.setState({showColorPicker: true})
	}

	onClickCheckButton = (rowID) => {
		this.checkAnswerOnserver(this.state[rowID])
	}

	checkAnswerOnserver = (data) => {
		fetch('http://mastermind.local/', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				answer: {
					peg1: data.peg1,
					peg2: data.peg2,
					peg3: data.peg3,
					peg4: data.peg4
				}
			})
		});
	}

	onClickColor = (colIndex) => {
		this.setState(prevState => ({
			[this.state.peg.rowID]: {
				...prevState[this.state.peg.rowID],
				[this.state.peg.pegID]: colIndex
			}
		}))
		this.setState({showColorPicker: false})
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
				: this.noop} rowState={this.state[num]} onClickCheckButton={this.onClickCheckButton} rowID={num} key={num}/>)
		return <div>
			<ColorPicker onClickColor={this.onClickColor} showColorPicker={this.state.showColorPicker} colorPickerPlace={this.state.colorPickerPlace}/>
			<div className="board">{Rows}</div>
		</div>
	}
}

export default Board
