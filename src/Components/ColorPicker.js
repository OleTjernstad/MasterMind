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
     <div className="color"></div>
     <div className="color"></div>
     <div className="color"></div>
     <div className="color"></div>
     <div className="color"></div>
     <div className="color"></div>

   </div>
}

export default ColorPicker
