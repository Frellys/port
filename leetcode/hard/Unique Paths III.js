// On a 2-dimensional grid, there are 4 types of squares:
// - 1 represents the starting square.There is exactly one starting square.
// - 2 represents the ending square.There is exactly one ending square.
// - 0 represents empty squares we can walk over.
// - -1 represents obstacles that we cannot walk over.
// Return the number of 4-directional walks from the starting square to the ending square, that walk over every non-obstacle square exactly once.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {
    let a;
    let b;
    let steps = 2;
    let rows = new Set(Object.keys(grid).map(function (el) { return parseInt(el); }));
    let cols = new Set(Object.keys(grid[0]).map(function (el) { return parseInt(el); }));
    grid.forEach(function (row, rdx) {
        row.forEach(function (col, cdx) {
            if (col === 0) steps++;
            if (col === 1) a = { r: rdx, c: cdx };
            if (col === 2) b = { r: rdx, c: cdx };
        });
    });
    let cnt = 0;
    let cur = new Set();
    function traverse(r, c) {
        if (rows.has(r) && cols.has(c) && grid[r][c] > -1) {
            let p = r + ',' + c;
            if (!cur.has(p)) {
                cur.add(p);
                if (r === b.r && c === b.c) {
                    if (steps === cur.size) cnt++;
                }
                else {
                    traverse((r - 1), c);
                    traverse((r + 1), c);
                    traverse(r, (c - 1));
                    traverse(r, (c + 1));
                }
                cur.delete(p);
            }
        }
    };
    traverse(a.r, a.c);
    return cnt;
};