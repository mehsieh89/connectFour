export const dropChip = (rowIndex, colIndex, color) => {
  return {
    type: 'DROP_CHIP',
    column: colIndex,
    row: rowIndex,
    color: color
  };
};
