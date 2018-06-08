import React, { Component } from 'react';

class BoardCell extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="cell">
        <div id="circle">
        </div>
      </div>
    )
  }
}

export default BoardCell;
