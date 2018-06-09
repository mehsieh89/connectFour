import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Board from './components/board.js';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { dropChip, incrementChipCount, togglePlayer, addFirstPlayer,
  addSecondPlayer, incrementColIndex, changeRecentChip } from './actions.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      playerOne: null,
      playerTwo: null
    }
  }
  componentDidMount = () => {
    this.setState({
      open: true
    })
  }

  handleChange = (event) => {
    this.setState({
      playerOne: event.target.value
    })
  }

  handleChange2 = (event) => {
    this.setState({
      playerTwo: event.target.value
    })
  }

  handleClose = () => {
    if (this.state.playerOne !== null && this.state.playerTwo !== null) {
      this.props.addFirstPlayer(this.state.playerOne);
      this.props.addSecondPlayer(this.state.playerTwo);
      this.setState({ open: false });
    }
  };

  render() {

    const playerCheck = () => {
      if (this.props.board.firstPlayer !== null && this.props.board.secondPlayer !== null) {
        if (this.props.board.currentPlayer) {
          return <h2 className="Player-Turn">Player Turn: {this.props.board.firstPlayer}</h2>
        } else {
          return <h2 className="Player-Turn">Player Turn: {this.props.board.secondPlayer}</h2>
        }
      }
    }
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Connect Four</h1>
          {playerCheck()}
        </header>
        <Dialog
          open={this.state.open}
        >
          <DialogTitle id="form-dialog-title">Welcome!</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Player 1's Name!
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="name"
              onChange={this.handleChange}
              fullWidth
            />
          </DialogContent>
          <DialogContent>
            <DialogContentText>
              Player 2's Name!
            </DialogContentText>
            <TextField
              margin="dense"
              id="name"
              label="name"
              onChange={this.handleChange2}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Let's Play!
            </Button>
          </DialogActions>
        </Dialog>
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
    currentPlayer: state.currentPlayer,
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
