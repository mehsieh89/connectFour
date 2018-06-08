import React, { Component } from 'react';
import BoardCell from './boardCell.js';

class Board extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let board = this.props.board
    return (
      <div className="board">
        {
          board.map((row, rowIndex) => {
            return row.map((col, colIndex) => {
              return (
                <BoardCell
                  key={Date.now() + colIndex}
                  data={{row: rowIndex, col: colIndex}}
                />
              )
            })
          })
        }
      </div>
    )
  }
}

export default Board;
