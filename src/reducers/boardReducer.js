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
  },
  firstPlayer: null,
  secondPlayer: null,
  colTracker: {
    col0: 0,
    col1: 0,
    col2: 0,
    col3: 0,
    col4: 0,
    col5: 0,
    col6: 0,
    col7: 0
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

  case 'CHANGE_RECENT_CHIP' :
    let newState5 = Object.assign({}, state);
    newState5.recentChip.row = null;
    newState5.recentChip.col = null;
    return newState5;

  case 'INCREMENT_CHIP_COUNT':
    return Object.assign({}, state, { chipCount: state.chipCount++});

  case 'TOGGLE_PLAYER':
    return Object.assign({}, state, { currentPlayer: !state.currentPlayer});

  case 'ADD_FIRST_PLAYER' :
    let newState2 = Object.assign({}, state);
    newState2.firstPlayer = action.payload;
    return newState2;

  case 'ADD_SECOND_PLAYER' :
    let newState3 = Object.assign({}, state);
    newState3.secondPlayer = action.payload;
    return newState3;

  case 'INCREMENT_COL_INDEX':
    let newState4 = Object.assign({}, state);
    newState4.colTracker[action.payload]++;
    return newState4;

  default:
    return state;
  }
}
