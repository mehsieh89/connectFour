import React, { Component } from 'react';

class BoardCell extends Component {
  constructor(props) {
    super(props);
    this.handleOnclick = this.handleOnclick.bind(this);
  }

  handleOnclick = (event) => {
    let position = this.props.data;
    let chipColor = "red";
    if (!this.props.currentPlayer) {
      chipColor = "yellow"
    }
    let check = "col" + position.col;
    this.props.incrementColIndex(check);
    if (this.props.colTracker[check] < 7) {
      this.props.dropChip(position.row, position.col, chipColor);
      this.props.togglePlayer();
    } else {
      this.props.changeRecentChip();
      alert('invalid move!');
    }
    let rowWin = this.props.checkAllRows(this.props.board);
    let colWin = this.props.colCheck(this.props.board);
    let diagLWin = this.props.diagLeftCheck(this.props.board);
    let diagRWin = this.props.diagRightCheck(this.props.board);

    if (rowWin !== undefined) {
      this.props.addResults(rowWin);
    } else if (colWin !== undefined) {
      this.props.addResults(colWin);
    } else if (diagLWin !== undefined) {
      this.props.addResults(diagLWin);
    } else if (diagRWin !== undefined) {
      this.props.addResults(diagRWin);
    }
  }

  render() {
    let recentChip = this.props.recentChip;
    let indexes = this.props.data;
    const check = () => {
      if (recentChip.row === indexes.row && recentChip.col === indexes.col) {
        return true;
      }  else {
        return false;
      }
    }
    let chip = <div id="circle"></div>;

    if (this.props.board[indexes.row][indexes.col] !== null && check()) {
      if (this.props.board[indexes.row][indexes.col] === "red") {
        chip =
        <div id="circle">
          <div className="animated slideInDown" id="chipRed"></div>
        </div>
      } else {
        chip =
        <div id="circle">
          <div className="animated slideInDown" id="chipYellow"></div>
        </div>
      }
    } else if (this.props.board[indexes.row][indexes.col] !== null) {
      if (this.props.board[indexes.row][indexes.col] === "red") {
        chip = <div id="chipRed"></div>
      } else {
        chip = <div id="chipYellow"></div>
      }
    }

    return (
      <div
        id="cell"
        onClick={this.handleOnclick}>
        {chip}
      </div>
    )
  }
}

export default BoardCell;
