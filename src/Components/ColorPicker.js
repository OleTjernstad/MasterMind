import React from 'react'
import '../App.css'

function ColorPicker(props){

  const colorBlock = colIndex => {
    return (<div className="color"
        onClick={() => console.log(colIndex)}
        style={{backgroundColor: props.ColorScheme[colIndex]}}>
    </div>)
  }

  if(props.showColorPicker)
  {
    var styles={display: 'block', top: props.colorPickerPlace.top, left: props.colorPickerPlace.left}

  }
  else {
     styles={display: 'none'}

  }
   return <div style={styles} className="colorSelect frame">
     {colorBlock(0)}
     {colorBlock(1)}
     {colorBlock(2)}
     {colorBlock(3)}
     {colorBlock(4)}
     {colorBlock(5)}


   </div>
}

export default ColorPicker
