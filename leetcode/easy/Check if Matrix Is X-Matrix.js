// A square matrix is said to be an X-Matrix if both of the following conditions hold:
// - All the elements in the diagonals of the matrix are non-zero.
// - All other elements are 0.
// Given a 2D integer array grid of size n x n representing a square matrix, return true if grid is an X-Matrix.
// Otherwise, return false.

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function (grid) {
    return grid.every((row, rdx) => {
        return row.every((col, cdx) => {
            return !col ^ (rdx == cdx || cdx == (row.length - 1 - rdx));
        });
    });
};