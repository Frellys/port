// You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.
// Grid cells are connected horizontally / vertically(not diagonally).
// The grid is completely surrounded by water, and there is exactly one island(i.e., one or more connected land cells).
// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island.One cell is a square with side length 1.
// The grid is rectangular, width and height don't exceed 100.
// Determine the perimeter of the island.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    let p = 0;
    grid.forEach(function (row, rdx) {
        row.forEach(function (cell, cdx) {
            if (cell == 1) {
                if (rdx - 1 < 0) {
                    p++;
                }
                else {
                    if (grid[rdx - 1][cdx] == 0) p++;
                }
                if (rdx + 1 == grid.length) {
                    p++;
                }
                else {
                    if (grid[rdx + 1][cdx] == 0) p++;
                }
                if (cdx - 1 < 0) {
                    p++;
                }
                else {
                    if (grid[rdx][cdx - 1] == 0) p++;
                }
                if (cdx + 1 == grid[0].length) {
                    p++;
                }
                else {
                    if (grid[rdx][cdx + 1] == 0) p++;
                }
            }
        });
    });
    return p;
};