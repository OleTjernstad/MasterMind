import React from 'react'
import Row from './Row'
import ColorPicker from './ColorPicker'
import Message from './Message'
import '../App.css';

class Board extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			showColorPicker: false,
			colorPickerPlace: {},
			showMessageBox: false,
			completed: false,
			koordinater: '',
			peg: {},
			1: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0,
				score1: 0,
				score2: 0,
				score3: 0,
				score4: 0,
				editable: 1
			},
			2: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0,
				score1: 0,
				score2: 0,
				score3: 0,
				score4: 0,
				editable: 0
			},
			3: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0,
				score1: 0,
				score2: 0,
				score3: 0,
				score4: 0,
				editable: 0
			},
			4: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0,
				score1: 0,
				score2: 0,
				score3: 0,
				score4: 0,
				editable: 0
			},
			5: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0,
				score1: 0,
				score2: 0,
				score3: 0,
				score4: 0,
				editable: 0
			},
			6: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0,
				score1: 0,
				score2: 0,
				score3: 0,
				score4: 0,
				editable: 0
			},
			7: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0,
				score1: 0,
				score2: 0,
				score3: 0,
				score4: 0,
				editable: 0
			},
			8: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0,
				score1: 0,
				score2: 0,
				score3: 0,
				score4: 0,
				editable: 0
			},
			9: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0,
				score1: 0,
				score2: 0,
				score3: 0,
				score4: 0,
				editable: 0
			},
			10: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0,
				score1: 0,
				score2: 0,
				score3: 0,
				score4: 0,
				editable: 0
			},
			11: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0,
				score1: 0,
				score2: 0,
				score3: 0,
				score4: 0,
				editable: 0
			},
			12: {
				peg1: 0,
				peg2: 0,
				peg3: 0,
				peg4: 0,
				score1: 0,
				score2: 0,
				score3: 0,
				score4: 0,
				editable: 0
			}
		}

	}

	ifAllColorsSelected = (rowID) => {
		if (this.state.peg.hasOwnProperty('rowID')) {
			let pegs = this.state[rowID]
			console.log(pegs)
			if (pegs.peg1 > 0 && pegs.peg2 > 0 && pegs.peg3 > 0 && pegs.peg4 > 0) {
				return true;
			}

		}
		return false;
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
		if (this.ifAllColorsSelected(rowID)) {
			this.checkAnswerOnserver(this.state[rowID])

			this.updateRowState(rowID, 'editable', 0)
			this.updateRowState(rowID + 1, 'editable', 1)

		}

	}

	updateRowState = (rowID, updateKey, value) => {

		this.setState(prevState => ({
			[rowID]: {
				...prevState[rowID],
				[updateKey]: value
			}
		}));

	}

	checkAnswerOnserver = (data) => {
		fetch('https://olet.no/GC82P3Y/api/', {
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
		})
			.then((response) => response.json())
			.then((responseJson) => {
				this.handleResponseFromServer(responseJson)
			})
	}

	handleResponseFromServer = (response) => {
		var loop = 1;
		console.log(response)

		response
			.score
			.forEach((value) => {
				this.updateRowState(this.state.peg.rowID, 'score' + loop, value)
				loop++;
			});
		if (response.completed) {
			this.setState({showMessageBox: true})
			this.setState({koordinater: response.FinaleKoordinater})
			this.setState({completed: true})
		} else if (this.state.peg.rowID === 12 || response.lapNumber > 12) {
			this.setState({showMessageBox: true})

		}
	}

	resetGameBoard = () => {
		this.setState({showMessageBox: false})
		this.setState({koordinater: ''})
		this.setState({completed: false})
		fetch('https://olet.no/GC82P3Y/api/?reset=reset')
		for (var i = 1; i <= 12; i++) {
			if (i === 1) {
				this.setState({
					[i]: {
						peg1: 0,
						peg2: 0,
						peg3: 0,
						peg4: 0,
						score1: 0,
						score2: 0,
						score3: 0,
						score4: 0,
						editable: 1
					}
				})
			} else {
				this.setState({
					[i]: {
						peg1: 0,
						peg2: 0,
						peg3: 0,
						peg4: 0,
						score1: 0,
						score2: 0,
						score3: 0,
						score4: 0,
						editable: 0
					}
				})
			}

		}
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
			<h1 style={{
					textAlign: 'center'
				}}>Mastermind</h1>
			<ColorPicker onClickColor={this.onClickColor} showColorPicker={this.state.showColorPicker} colorPickerPlace={this.state.colorPickerPlace}/>
			<div className="board">{Rows}</div>
			<Message resetGameBoard={this.resetGameBoard} showMessageBox={this.state.showMessageBox} completed={this.state.completed} koordinater={this.state.koordinater}/>
			<p style={{
					textAlign: 'center'
				}}>
				<strong>© Copyright</strong>
				: Ole Tjernstad, 2019</p>
		</div>
	}
}

export default Board
