// You are given an n x n integer matrix grid.
// Generate an integer matrix maxLocal of size (n - 2) x (n - 2) such that:
// - maxLocal[i][j] is equal to the largest value of the 3 x 3 matrix in grid centered around row i + 1 and column j + 1.
// In other words, we want to find the largest value in every contiguous 3 x 3 matrix in grid.
// Return the generated matrix.

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
    let getLocalMax = function (row, col) {
        let vals = [];
        for (let r = row - 1; r < row + 2; r++) {
            for (let c = col - 1; c < col + 2; c++) {
                vals.push(grid[r][c]);
            }
        }
        return Math.max.apply(null, vals);
    };
    let ret = new Array(grid.length - 2).fill(0).map(() => []);
    for (let i = 1; i < grid.length - 1; i++) {
        for (let j = 1; j < grid.length - 1; j++) {
            ret[i - 1].push(getLocalMax(i, j));
        }
    }
    return ret;
};