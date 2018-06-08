import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Board from './components/board.js';
import { dropChip, incrementChipCount, togglePlayer, addFirstPlayer,
  addSecondPlayer, incrementColIndex, changeRecentChip } from './actions.js';
import './App.css';

class App extends Component {
  componentDidMount() {
    // let firstPlayer = prompt('player 1 name');
    // let secondPlayer = prompt('player 2 name');
    // this.props.addFirstPlayer(firstPlayer);
    // this.props.addSecondPlayer(secondPlayer);
  }
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Connect Four</h1>
        </header>
        <h1>{this.props.board.firstPlayer}</h1>
        <h2>{this.props.board.secondPlayer}</h2>
        <Board
          board={this.props.board.board}
          chipCount={this.props.board.chipCount}
          togglePlayer={this.props.togglePlayer}
          recentChip={this.props.board.recentChip}
          changeRecentChip={this.props.changeRecentChip}
          colTracker={this.props.board.colTracker}
          incrementColIndex={this.props.incrementColIndex}
          currentPlayer={this.props.board.currentPlayer}
          dropChip={this.props.dropChip}
          incrementChipCount={this.props.incrementChipCount}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    board: state.board,
    chipCount: state.chipCount,
    recentChip: state.recentChip,
    firstPlayer: state.firstPlayer,
    secondPlayer: state.secondPlayer,
    colTracker: state.colTracker
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    dropChip: dropChip,
    incrementChipCount: incrementChipCount,
    togglePlayer: togglePlayer,
    addFirstPlayer: addFirstPlayer,
    addSecondPlayer: addSecondPlayer,
    incrementColIndex: incrementColIndex,
    changeRecentChip: changeRecentChip
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(App);
