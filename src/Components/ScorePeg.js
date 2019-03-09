import React from 'react'
import ColorScheme from './ColorScheme'

function ScorePeg(props) {
	return <div style={{
			backgroundColor: ColorScheme[props.colIndex]
		}} className="checkPins"></div>
}

export default ScorePeg
