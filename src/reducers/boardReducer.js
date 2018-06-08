const initialState = {
  board: [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]
  ],
  currentPlayer: true,
  chipCount: 0,
  recentChip: {
    row: null,
    col: null,
  }
};

export default function(state = initialState, action) {
  switch (action.type) {

  case 'DROP_CHIP' :
    let newState = Object.assign({}, state);
    for (let i = 5; i > -1; i--) {
      if (newState.board[i][action.column] === null) {
        newState.board[i][action.column] = action.color;
        state.recentChip.row = i;
        state.recentChip.col = action.column;
        return newState;
      }
    }

  case 'INCREMENT_CHIP_COUNT':
    return Object.assign({}, state, { chipCount: state.chipCount++});

  default:
    return state;
  }
}
