import React from 'react'
import Row from './Row'
import ColorPicker from './ColorPicker'
import ColorSheme from './ColorSheme'
import '../App.css';

class Board extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			showColorPicker: false,
			colorPickerPlace: {}
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

		const Rows = rownums.map(num => <Row onClickPeg={this.onClickPeg} key={num}/>)
		return <div>
			<ColorPicker showColorPicker={this.state.showColorPicker} colorPickerPlace={this.state.colorPickerPlace} ColorSheme={ColorSheme}/>
			<div className="board">{Rows}</div>
		</div>
	}
}

export default Board
