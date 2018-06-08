import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class BoardCell extends Component {
  constructor(props) {
    super(props);
    this.handleOnclick = this.handleOnclick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // let indexes = this.props.data;
    // let test;
    // if (this.props.board[indexes.row][indexes.col] === nextProps.board[indexes.row][indexes.col]){
    //   test = true;
    // } else {
    //   test = false;
    // }
    // console.log(test);
    // return test;
    // this.setState({
    //   animation: null
    // })
    // var $this = ReactDOM.findDOMNode(this);
    // let renderedChip = $this.firstChild;
    // if (renderedChip.className) {
    //   renderedChip.className = "";
    // }
  }

  //set state chip counter
  //every click adds chip counter
  //on render, i chip counter doesn't add up, do not add noAnimation
  //on render if it does match, add animation

  handleOnclick(event) {
    let position = this.props.data;
    let chipColor = "red";
    if (!this.props.currentPlayer) {
      chipColor = "black"
    }
    this.props.dropChip(position.row, position.col, "red");
    this.props.incrementChipCount();
  }

  render() {
    let recentChip = this.props.recentChip;
    let indexes = this.props.data;
    console.log(recentChip);
    const check = () => {
      if (this.props.recentChip.row === indexes.row && this.props.recentChip.col === indexes.col) {
        return true;
      }  else {
        return false;
      }
    }
    let chip = <div id="circle"></div>;
    if (this.props.board[indexes.row][indexes.col] === "red" && check()) {
      chip = <div className="animated slideInDown" id="chip"></div>
    } else if (this.props.board[indexes.row][indexes.col] === "red") {
      chip = <div id="chip"></div>
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
