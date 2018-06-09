import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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
    if (this.props.results !== undefined) {
      this.setState({
        open: true
      })
    }
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
      >
        <DialogTitle id="form-dialog-title">Results</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {this.props.results}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Play Again?
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default ResultsDialog;
