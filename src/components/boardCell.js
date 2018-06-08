import React, { Component } from 'react';

class BoardCell extends Component {
  constructor(props) {
    super(props);
    this.handleOnclick = this.handleOnclick.bind(this);
  }

  handleOnclick(event) {
    let position = this.props.data;
    this.props.dropChip(position.row, position.col, "red");
  }

  render() {
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
