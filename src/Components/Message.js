import React from 'react'
import '../App.css';

function Message(props) {
	return <div className="frame messageBox" style={props.showMessageBox ? {display: 'block'}: {}}>
    {props.completed ? <p>Gratuler, du fant koden: {props.koordinater}</p>: <p>
      Du feilet, prøv igjen
    </p>}
    <p>

      <button onClick={() => props.resetGameBoard()}>Prøv igjen</button>

    </p>
  </div>
}

export default Message
