export function convertGridIntoRows(grid) {
  if (grid.length === 0) return [];

  const numCols = grid.length;
  const numRows = grid[0].length;

  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(new Array(numCols).fill(i+1));
  }

  for (let col = 0; col < numCols; col++) {
    for (let row = 0; row < numRows; row++) {
      rows[row][col] = grid[col][row];
    }
  }

  return rows;
}
