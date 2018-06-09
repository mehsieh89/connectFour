export const dropChip = (rowIndex, colIndex, color) => {
  return {
    type: 'DROP_CHIP',
    column: colIndex,
    row: rowIndex,
    color: color
  };
};

export const changeRecentChip = () => {
  return {
    type: 'CHANGE_RECENT_CHIP',
  };
};

export const incrementChipCount = () => {
  return {
    type: 'INCREMENT_CHIP_COUNT',
  };
};

export const togglePlayer = () => {
  return {
    type: 'TOGGLE_PLAYER',
  };
};

export const addFirstPlayer = (name) => {
  return {
    type: 'ADD_FIRST_PLAYER',
    payload: name
  };
};

export const addSecondPlayer = (name) => {
  return {
    type: 'ADD_SECOND_PLAYER',
    payload: name
  };
};

export const incrementColIndex = (colIndex) => {
  return {
    type: 'INCREMENT_COL_INDEX',
    payload: colIndex
  };
};

export const addResults = (results) => {
  return {
    type: 'ADD_RESULTS',
    payload: results
  };
};
