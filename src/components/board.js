import React, { Component } from 'react';
import BoardCell from './boardCell.js';

class Board extends Component {
  constructor(props) {
    super(props)
  }
  componentDidUpdate = () => {
    let rowWin = this.checkAllRows(this.props.board);
    let colWin = this.colCheck(this.props.board);
    let diagLWin = this.diagLeftCheck(this.props.board);
    let diagRWin = this.diagRightCheck(this.props.board);
    if (rowWin !== undefined) {
      alert(rowWin);
    } else if (colWin !== undefined) {
      alert(colWin);
    } else if (diagLWin !== undefined) {
      alert(diagLWin);
    } else if (diagRWin !== undefined) {
      alert(diagRWin);
    }
  }

  rowCheck = (row) => {
    let tracker = {
      red: 0,
      yellow: 0
    };
    for (let k = 0; k < row.length; k++) {
      if (row[k] === "red") {
        tracker.red++;
        tracker.yellow = 0;
        if (tracker.red === 4) {
          return "red is the winner";
        }
      } else if (row[k] === "yellow"){
        tracker.yellow++;
        tracker.red = 0;
        if (tracker.yellow === 4) {
          return "yellow is the winner";
        }
      } else if (row[k] === null) {
        tracker.yellow = 0;
        tracker.red = 0;
      }
    }
  }

  checkAllRows = (board) => {
    for (let i = 0; i < board.length; i++) {
      let check = this.rowCheck(board[i]);
      if (check !== undefined) {
        return check;
      }
    }
  }

  colCheck = (board) => {
    let columnIndex = 0;
    for (let k = 0; k < board[0].length; k++) {
      let tracker = {
        red: 0,
        yellow: 0
      };
      for (let i = 0; i < board.length; i++) {
        if (board[i][columnIndex] === "red") {
          tracker.red++;
          tracker.yellow = 0;
          if (tracker.red === 4) {
            return "red is the winner";
          }
        } else if (board[i][columnIndex] === "yellow") {
          tracker.yellow++;
          tracker.red = 0;
          if (tracker.yellow === 4) {
            return "yellow is the winner";
          }
        } else if (board[i][columnIndex] === null) {
          tracker.yellow = 0;
          tracker.red = 0;
        }
      }
      columnIndex++;
    }
  }

  diagLeftCheck = (board) => {
    let columnIndex = 0;
    let rowIndex = 2;
    let that = this;
    let output;

    for (let i = 0; i < 6; i++) {
      function diagonalConversion(rowPos, colPos) {
        let arrayToCheck = [];
        while(board[rowPos] !== undefined) {
          if (board[rowPos][colPos] === undefined) {
            rowPos++;
            colPos++;
            continue;
          } else {
            arrayToCheck.push(board[rowPos][colPos]);
            rowPos++;
            colPos++;
          }
        }
        if (output === undefined) {
          output = that.rowCheck(arrayToCheck);
        }
      }
      diagonalConversion(rowIndex, columnIndex);
      if (rowIndex !== 0) {
        rowIndex--;
      }
       if (rowIndex === 0) {
        columnIndex++;
      }
    }
    return output;
  }

  diagRightCheck = (board) => {
    let columnIndex = 6;
    let rowIndex = 2;
    let that = this;
    let output;

    for (let i = 0; i < 6; i++) {
      function diagonalConversion(rowPos, colPos) {
        let arrayToCheck = [];
        while(board[rowPos] !== undefined) {
          if (board[rowPos][colPos] === undefined) {
            rowPos++;
            colPos--;
            continue;
          } else {
            arrayToCheck.push(board[rowPos][colPos]);
            rowPos++;
            colPos--;
          }
        }
        if (output === undefined) {
          output = that.rowCheck(arrayToCheck);
        }
      }
      diagonalConversion(rowIndex, columnIndex);
      if (rowIndex !== 0) {
        rowIndex--;
      }
      if (rowIndex === 0) {
        columnIndex--;
      }
    }
    return output;
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
                  chipCount={this.props.chipCount}
                  incrementColIndex={this.props.incrementColIndex}
                  incrementChipCount={this.props.incrementChipCount}
                  colTracker={this.props.colTracker}
                  board={this.props.board}
                  togglePlayer={this.props.togglePlayer}
                  recentChip={this.props.recentChip}
                  changeRecentChip={this.props.changeRecentChip}
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
