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
				editable: 1,
				enableCheck: false
			},
			2: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0,
				editable: 0,
				enableCheck: false
			},
			3: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0,
				editable: 0,
				enableCheck: false
			},
			4: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0,
				editable: 0,
				enableCheck: false
			},
			5: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0,
				editable: 0,
				enableCheck: false
			},
			6: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0,
				editable: 0,
				enableCheck: false
			},
			7: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0,
				editable: 0,
				enableCheck: false
			},
			8: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0,
				editable: 0,
				enableCheck: false
			},
			9: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0,
				editable: 0,
				enableCheck: false
			},
			10: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0,
				editable: 0,
				enableCheck: false
			},
			11: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0,
				editable: 0,
				enableCheck: false
			},
			12: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0,
				editable: 0,
				enableCheck: false
			}
		}

	}

	ifAllColorsSelected = () => {
		let pegs = this.state[this.state.peg.rowID]
		console.log(pegs)
		if (pegs.peg1 > 0 && pegs.peg2 > 0 && pegs.peg3 > 0 && pegs.peg4 > 0) {
			this.setState(prevState => ({
				[this.state.peg.rowID]: {
					...prevState[this.state.peg.rowID],
					enableCheck: true
				}
			}))
		}
	}

	componentDidMount() {
		if (this.state.peg.hasOwnProperty('rowID')) 
			this.ifAllColorsSelected()
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
				: this.noop} rowState={this.state[num]} rowID={num} key={num}/>)
		return <div>
			<ColorPicker onClickColor={this.onClickColor} showColorPicker={this.state.showColorPicker} colorPickerPlace={this.state.colorPickerPlace}/>
			<div className="board">{Rows}</div>
		</div>
	}
}

export default Board
