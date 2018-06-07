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

  default:
    return state;
  }
}
