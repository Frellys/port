// Given a non - empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.)
// You may assume all four edges of the grid are surrounded by water.
// Find the maximum area of an island in the given 2D array.
// If there is no island, the maximum area is 0.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    function traverse(p) {
        if (grid[p.r] && grid[p.r][p.c]) {
            if (seen.has([p.r, p.c].join(',')) == false) {
                seen.add([p.r, p.c].join(','));
                cur++;
                if (max < cur) max = cur;
                traverse({ r: p.r - 1, c: p.c });
                traverse({ r: p.r, c: p.c + 1 });
                traverse({ r: p.r + 1, c: p.c });
                traverse({ r: p.r, c: p.c - 1 });
            }
        }
    }
    let max = 0;
    let cur = 0;
    let seen = new Set();
    grid.forEach(function (row, rdx) {
        row.forEach(function (cell, cdx) {
            if (cell) {
                cur = 0;
                traverse({ r: rdx, c: cdx});
            }
        });
    });
    return max;
};