import React, { Component } from 'react';
import BoardCell from './boardCell.js';

class Board extends Component {

  render() {
    let board = this.props.board
    return (
      <div className="board">
        {
          board.map((row, rowIndex) => {
            return row.map((col, colIndex) => {
              return (
                <BoardCell
                  chipCount={this.props.chipCount}
                  incrementChipCount={this.props.incrementChipCount}
                  board={this.props.board}
                  togglePlayer={this.props.togglePlayer}
                  recentChip={this.props.recentChip}
                  currentPlayer={this.props.currentPlayer}
                  dropChip={this.props.dropChip}
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
