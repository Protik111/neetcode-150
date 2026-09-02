function searchMatrix(matrix: number[][], target: number): boolean {
  const rows = matrix.length;
  const cols = matrix[0].length;

  //     [
  //   [1,  3,  5,  7],
  //   [10, 11, 16, 20],
  //   [23, 30, 34, 60]
  // ]

  let left = 0;
  let right = rows * cols - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // Convert virtual 1D index to real 2D coordinates
    const row = Math.floor(mid / cols);
    const col = mid % cols;

    const value = matrix[row][col];

    if (value === target) {
      return true;
    }

    if (value < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}
