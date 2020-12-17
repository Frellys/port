// On a N * N grid, we place some 1 * 1 * 1 cubes.
// Each value v = grid[i][j] represents a tower of v cubes placed on top of grid cell(i, j).
// Return the total surface area of the resulting shapes.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function (grid) {
    let ret = 0;
    grid.forEach(function (row, rdx) {
        row.forEach(function (col, cdx) {
            if (col) {
                ret += 2;
                ret += col * 4;
                if (grid[rdx - 1]) {
                    ret -= Math.min(col, grid[rdx - 1][cdx]) * 2;
                }
                if (grid[rdx][cdx - 1]) {
                    ret -= Math.min(col, grid[rdx][cdx - 1]) * 2;
                }
            }
        });
    });
    return ret;
};