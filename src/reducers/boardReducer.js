const initialState = {
  board: [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]
  ],
  currentPlayer: true
};

export default function(state = initialState, action) {
  switch (action.type) {

  case 'DROP_CHIP' :
    let newState = Object.assign({}, state);
    for (let i = 5; i > -1; i--) {
      if (newState.board[i][action.column] === null) {
        newState.board[i][action.column] = action.color;
        return newState;
      }
    }



  default:
    return state;
  }
}
