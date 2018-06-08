const initialState = {
  board: [
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null]
]
};

export default function(state = initialState, action) {
  switch (action.type) {

  case 'DROP_CHIP' :
   let newState = Object.assign({}, state);
   newState.board[action.row][action.column] = action.color;
   return newState;

  default:
    return state;
  }
}
