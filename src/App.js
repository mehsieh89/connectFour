import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Board from './components/board.js';
import { dropChip } from './actions.js';
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
          currentPlayer={this.props.board.currentPlayer}
          dropChip={this.props.dropChip}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    board: state.board,
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    dropChip: dropChip
  }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(App);
