// Given a m * n matrix grid which is sorted in non - increasing order both row - wise and column - wise.
// Return the number of negative numbers in grid.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    return grid.reduce((acc, row) => {
        return acc + row.filter(cell => cell < 0).length;
    }, 0);
};