// In a 2 dimensional array grid, each value grid[i][j] represents the height of a building located there.We are allowed to increase the height of any number of buildings,
// by any amount(the amounts can be different for different buildings).Height 0 is considered to be a building as well.
// At the end, the "skyline" when viewed from all four directions of the grid, i.e.top, bottom, left, and right, must be the same as the skyline of the original grid.
// A city's skyline is the outer contour of the rectangles formed by all the buildings when viewed from a distance. See the following example.
// What is the maximum total sum that the height of the buildings can be increased ?

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
    let row_max = grid.map(function (row) { return Math.max.apply(null, row); });
    let col_max = grid[0].slice();
    grid.forEach(function (row) {
        row.forEach(function (col, cdx) { if (col_max[cdx] < col) col_max[cdx] = col; });
    });
    let ret = 0;
    grid.forEach(function (row, rdx) {
        row.forEach(function (col, cdx) {
            if (col < row_max[rdx] && col < col_max[cdx]) ret += Math.min(row_max[rdx], col_max[cdx]) - col;
        });
    });
    return ret;
};