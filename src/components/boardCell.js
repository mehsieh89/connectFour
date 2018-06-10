import React, { Component } from 'react';

class BoardCell extends Component {
  constructor(props) {
    super(props);
    this.handleOnclick = this.handleOnclick.bind(this);
  }

  handleResultsCheck = () => {
    let rowWin = this.props.checkAllRows(this.props.board);
    let colWin = this.props.colCheck(this.props.board);
    let diagLWin = this.props.diagLeftCheck(this.props.board);
    let diagRWin = this.props.diagRightCheck(this.props.board);

    if (rowWin !== undefined) {
      this.props.addResults(rowWin);
      return true;
    } else if (colWin !== undefined) {
      this.props.addResults(colWin);
      return true;
    } else if (diagLWin !== undefined) {
      this.props.addResults(diagLWin)
      return true;
    } else if (diagRWin !== undefined) {
      this.props.addResults(diagRWin);
      return true;
    }else {
      return false;
    }
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
      if (!this.handleResultsCheck()) {
        this.props.togglePlayer();
      }
      this.props.incrementChipCount();
    } else {
      this.props.changeRecentChip();
      alert('invalid move!');
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
      let animationRow = "animated slideInDown" + indexes.row;
      if (this.props.board[indexes.row][indexes.col] === "red") {
        chip =
        <div id="circle">
          <div className={animationRow} id="chipRed"></div>
        </div>
      } else {
        chip =
        <div id="circle">
          <div className={animationRow} id="chipYellow"></div>
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
