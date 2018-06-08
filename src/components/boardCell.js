import React, { Component } from 'react';

class BoardCell extends Component {
  constructor(props) {
    super(props);
    this.handleOnclick = this.handleOnclick.bind(this);
  }

  handleOnclick(event) {
    let position = this.props.data;
    let chipColor = "red";
    if (!this.props.currentPlayer) {
      chipColor = "black"
    }
    this.props.dropChip(position.row, position.col, "red");
  }

  render() {
    let indexes = this.props.data;
    if (this.props.board[indexes.row][indexes.col] === "red") {

    }
    return (
      <div
        id="cell"
        onClick={this.handleOnclick}>
        <div id="circle">
        </div>
      </div>
    )
  }
}

export default BoardCell;
