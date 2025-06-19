export function createEmptyGrid(rows, cols) {
  const grid = [];
  for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 0; c < cols; c++) {
      row.push({
        row: r,
        col: c,
        isBomb: false,
        adjacentBombs: 0,
        isRevealed: false,
        isFlagged: false,
      });
    }
    grid.push(row);
  }
  return grid;
}

export function plantBombs(grid, bombs, exclude = []) {
  const rows = grid.length;
  const cols = grid[0].length;
  const isExcluded = (r, c) =>
    exclude.some(p => p.r === r && p.c === c);

  let placed = 0;
  while (placed < bombs) {
    const r = Math.floor(Math.random() * rows);
    const c = Math.floor(Math.random() * cols);
    if (!grid[r][c].isBomb && !isExcluded(r, c)) {
      grid[r][c].isBomb = true;
      placed++;
    }
  }
}

export function calculateNeighborBombs(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const dirs = [
    [-1,-1],[-1,0],[-1,1],
    [0,-1],       [0,1],
    [1,-1],[1,0],[1,1],
  ];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c].isBomb) continue;
      let count = 0;
      dirs.forEach(([dr,dc]) => {
        const nr = r+dr, nc = c+dc;
        if (
          nr>=0 && nr<rows &&
          nc>=0 && nc<cols &&
          grid[nr][nc].isBomb
        ) count++;
      });
      grid[r][c].adjacentBombs = count;
    }
  }
}

// flood reveal :p
export function revealTile(grid, r, c) {
  const tile = grid[r][c];
  if (tile.isRevealed || tile.isFlagged) return;
  tile.isRevealed = true;
  if (tile.adjacentBombs === 0 && !tile.isBomb) {
    const dirs = [
      [-1,-1],[-1,0],[-1,1],
      [0,-1],       [0,1],
      [1,-1],[1,0],[1,1],
    ];
    dirs.forEach(([dr,dc]) => {
      const nr = r+dr, nc = c+dc;
      if (
        nr >= 0 &&
        nr < grid.length &&
        nc >= 0 &&
        nc < grid[0].length &&
        !grid[nr][nc].isRevealed
      ) {
        revealTile(grid, nr, nc);
      }
    });
  }
}