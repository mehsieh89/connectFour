export const dropChip = (rowIndex, colIndex, color) => {
  return {
    type: 'DROP_CHIP',
    column: colIndex,
    row: rowIndex,
    color: color
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
