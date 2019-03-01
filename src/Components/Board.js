import React from 'react'
import Row from 'Row'

function Board(props){
  const rownums = [1,2,3,4,5,6,7,8,9,10, 11, 12]

  const Rows = rownums.map(num => <Row key="num" />)
   return <Rows />
}

export default Board
