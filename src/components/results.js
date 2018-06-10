import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class ResultsDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  componentDidMount = () => {
    this.setState({
      open: true
    })
  }

  handleRestart = () => {
    window.location.reload();
    this.setState({ open: false });
  }

  render() {
    let winnerCheck = () => {
      if (this.props.results === "firstPlayer") {
        return this.props.firstPlayer;
      } else if (this.props.results === "secondPlayer"){
        return this.props.secondPlayer;
      } else if (this.props.chipCount === 42){
        return "Draw! No one "
      }
    }
    return (
      <Dialog
        open={this.state.open}
        onClose={this.handleRestart}
      >
        <DialogTitle id="form-dialog-title">Results</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {winnerCheck() + " is the winner"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleRestart} color="primary">
            Play Again?
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default ResultsDialog;
