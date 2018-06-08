import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Board from './components/board.js';
import { dropChip, incrementChipCount, togglePlayer } from './actions.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Connect Four</h1>
        </header>
        <Board
          board={this.props.board.board}
          chipCount={this.props.board.chipCount}
          togglePlayer={this.props.togglePlayer}
          recentChip={this.props.board.recentChip}
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
    recentChip: state.recentChip
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    dropChip: dropChip,
    incrementChipCount: incrementChipCount,
    togglePlayer: togglePlayer
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(App);
