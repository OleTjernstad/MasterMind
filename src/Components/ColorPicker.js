import React from 'react'
import ColorScheme from './ColorScheme'
import '../App.css'

function ColorPicker(props) {

	const colorBlock = colIndex => {
		return (<div className="color" onClick={() => props.onClickColor(colIndex)} style={{
				backgroundColor: ColorScheme[colIndex]
			}}></div>)
	}
	let styles = {}
	if (props.showColorPicker) {
		let myTop = window.scrollY + props.colorPickerPlace.top + props.colorPickerPlace.height / 2
		let myLeft = props.colorPickerPlace.right - props.colorPickerPlace.width / 2
		styles = {
			display: 'block',
			top: myTop,
			left: myLeft
		}

	} else {
		styles = {
			display: 'none'
		}

	}
	return <div style={styles} className="colorSelect frame">
		{colorBlock(1)}
		{colorBlock(2)}
		{colorBlock(3)}
		{colorBlock(4)}
		{colorBlock(5)}
		{colorBlock(6)}

	</div>
}

export default ColorPicker
