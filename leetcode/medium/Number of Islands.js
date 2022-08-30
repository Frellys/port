// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
// You may assume all four edges of the grid are all surrounded by water.

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let traverse = function (r, c) {
        grid[r][c] = '0';
        if (grid[r - 1] && grid[r - 1][c] == '1') {
            traverse(r - 1, c);
        }
        if (grid[r + 1] && grid[r + 1][c] == '1') {
            traverse(r + 1, c);
        }
        if (grid[r][c - 1] == '1') {
            traverse(r, c - 1);
        }
        if (grid[r][c + 1] == '1') {
            traverse(r, c + 1);
        }
    };
    let ret = 0;
    grid.forEach((row, rdx) => {
        row.forEach((col, cdx) => {
            if (col == '1') {
                ret++;
                traverse(rdx, cdx);
            }
        });
    });
    return ret;
};