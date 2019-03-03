import React from 'react'
import '../App.css'

function ColorPicker(props){
  if(props.showColorPicker)
  {
    var styles={display: 'block', top: props.colorPickerPlace.top, left: props.colorPickerPlace.left}

  }
  else {
     styles={display: 'none'}

  }
   return <div style={styles} className="colorSelect frame">
     <div className="color colorRed"></div>
     <div className="color colorCyan"></div>
     <div className="color colorGreen"></div>
     <div className="color colorOrange"></div>
     <div className="color colorMagenta"></div>
     <div className="color colorBlue"></div>

   </div>
}

export default ColorPicker
