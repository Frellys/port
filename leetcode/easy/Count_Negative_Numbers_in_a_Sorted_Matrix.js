// Given a m * n matrix grid which is sorted in non - increasing order both row - wise and column - wise.
// Return the number of negative numbers in grid.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    let cnt = 0;
    grid.forEach(function (row) {
        row.forEach(function (cell) {
            if (cell < 0) cnt++;
        });
    });
    return cnt;
};