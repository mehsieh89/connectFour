let board = [
  [0, 1, 0, 0, 1, 1, 0],
  [1, 1, 0, 1, 0, 0, 1],
  [0, 0, 1, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 1, 0],
  [0, 0, 1, 0, 0, 1, 0]
];

function rowCheck(row) {
  let tracker = {
    red: 0,
    black: 0
  };
  for (let k = 0; k < row.length; k++) {
    if (row[k] === 0) {
      tracker.red++;
      tracker.black = 0;
      if (tracker.red === 4) {
        return "red is the winner";
      }
    } else if (row[k] === 1){
      tracker.black++;
      tracker.red = 0;
      if (tracker.black === 4) {
        return "black is the winner";
      }
    }
  }
}

function rowCheckAll(board) {
  for (let i = 0; i < board.length; i++) {
    let check = rowCheck(board[i]);
    if (check !== undefined) {
      return check;
    }
  }
}

function colCheck(board) {
  let columnIndex = 0;
  for (let k = 0; k < board[0].length; k++) {
    let tracker = {
      red: 0,
      black: 0
    };
    for (let i = 0; i < board.length; i++) {
      if (board[i][columnIndex] === 0) {
        tracker.red++;
        tracker.black = 0;
        if (tracker.red === 4) {
          return "red is the winner";
        }
      } else if (board[i][columnIndex] === 1) {
        tracker.black++;
        tracker.red = 0;
        if (tracker.black === 4) {
          return "black is the winner";
        }
      }
    }
    columnIndex++;
  }
}
