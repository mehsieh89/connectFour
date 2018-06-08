let board = [
  [0, 1, 0, 0, 1, 1, 0],
  [1, 1, 0, 1, 0, 0, 1],
  [0, 0, 1, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 1, 0],
  [0, 0, 1, 0, 0, 1, 0]
];

//checks a row
function rowCheck(row) {
  let tracker = {
    red: 0,
    yellow: 0
  };
  for (let k = 0; k < row.length; k++) {
    if (row[k] === 0) {
      tracker.red++;
      tracker.yellow = 0;
      if (tracker.red === 4) {
        return "red is the winner";
      }
    } else if (row[k] === 1){
      tracker.yellow++;
      tracker.red = 0;
      if (tracker.yellow === 4) {
        return "yellow is the winner";
      }
    }
  }
}
//checks all rows
function rowCheckAll(board) {
  for (let i = 0; i < board.length; i++) {
    let check = rowCheck(board[i]);
    if (check !== undefined) {
      return check;
    }
  }
}
//checks a column
function colCheck(board) {
  let columnIndex = 0;
  for (let k = 0; k < board[0].length; k++) {
    let tracker = {
      red: 0,
      yellow: 0
    };
    for (let i = 0; i < board.length; i++) {
      if (board[i][columnIndex] === 0) {
        tracker.red++;
        tracker.yellow = 0;
        if (tracker.red === 4) {
          return "red is the winner";
        }
      } else if (board[i][columnIndex] === 1) {
        tracker.yellow++;
        tracker.red = 0;
        if (tracker.yellow === 4) {
          return "yellow is the winner";
        }
      }
    }
    columnIndex++;
  }
}
//checks diagonals from Left, using array conversion then row check;
function rowCheck(row) {
  let tracker = {
    red: 0,
    yellow: 0
  };
  for (let k = 0; k < row.length; k++) {
    if (row[k] === 0) {
      tracker.red++;
      tracker.yellow = 0;
      if (tracker.red === 4) {
        return "red is the winner";
      }
    } else if (row[k] === 1){
      tracker.yellow++;
      tracker.red = 0;
      if (tracker.yellow === 4) {
        return "yellow is the winner";
      }
    }
  }
}

function diagLeftCheck(board) {
  let columnIndex = 0;
  let rowIndex = 2;
  let output;

  for (let i = 0; i < 6; i++) {
    function diagonalConversion(rowPos, colPos) {
      let arrayToCheck = [];
      while(board[rowPos] !== undefined) {
        if (board[rowPos][colPos] === undefined) {
          rowPos++;
          colPos++;
          continue;
        } else {
          arrayToCheck.push(board[rowPos][colPos]);
          rowPos++;
          colPos++;
        }
      }
      if (output === undefined) {
        output = rowCheck(arrayToCheck);
      }
      console.log(arrayToCheck);
    }
    diagonalConversion(rowIndex, columnIndex);
    if (rowIndex !== 0) {
      rowIndex--;
    }
     if (rowIndex === 0) {
      columnIndex++;
    }
  }
  return output;
}
//checks diagonals from Right, using array conversion then row check;
function diagRightCheck(board) {
  let columnIndex = 6;
  let rowIndex = 2;
  let output;

  for (let i = 0; i < 6; i++) {
    function diagonalConversion(rowPos, colPos) {
      let arrayToCheck = [];
      while(board[rowPos] !== undefined) {
        if (board[rowPos][colPos] === undefined) {
          rowPos++;
          colPos--;
          continue;
        } else {
          arrayToCheck.push(board[rowPos][colPos]);
          rowPos++;
          colPos--;
        }
      }
      if (output === undefined) {
        output = rowCheck(arrayToCheck);
      }
      console.log(arrayToCheck);
    }
    diagonalConversion(rowIndex, columnIndex);
    if (rowIndex !== 0) {
      rowIndex--;
    }
    if (rowIndex === 0) {
      columnIndex--;
    }
  }
  return output;
}
