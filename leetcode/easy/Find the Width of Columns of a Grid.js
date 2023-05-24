// You are given a 0-indexed m x n integer matrix grid. The width of a column is the maximum length of its integers.
// - For example, if grid = [[-10], [3], [12]], the width of the only column is 3 since -10 is of length 3.
// Return an integer array ans of size n where ans[i] is the width of the ith column.
// The length of an integer x with len digits is equal to len if x is non-negative, and len + 1 otherwise.

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function (grid) {
    return new Array(grid[0].length).fill(false).map((el, edx) => {
        return Math.max.apply(null, new Array(grid.length).fill(false).map((r, rdx) => {
            return grid[rdx][edx].toString().length;
        }));
    });
};