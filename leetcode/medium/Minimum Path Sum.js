// Given a m x n grid filled with non - negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    function val(r, c) {
        return (r < 0 || c < 0) ? Infinity : grid[r][c];
    }
    grid.forEach(function (row, rdx) {
        row.forEach(function (cell, cdx) {
            if (rdx == 0 && cdx == 0) return;
            grid[rdx][cdx] += Math.min(val(rdx - 1, cdx), val(rdx, cdx - 1));
        });
    });
    return grid[grid.length - 1][grid[0].length - 1];
};