// On a 2 dimensional grid with R rows and C columns, we start at(r0, c0) facing east.
// Here, the north - west corner of the grid is at the first row and column, and the south - east corner of the grid is at the last row and column.
// Now, we walk in a clockwise spiral shape to visit every position in this grid.
// Whenever we would move outside the boundary of the grid, we continue our walk outside the grid(but may return to the grid boundary later.)
// Eventually, we reach all R * C spaces of the grid.
// Return a list of coordinates representing the positions of the grid in the order they were visited.

/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var spiralMatrixIII = function (R, C, r0, c0) {
    function check() {
        if (cur.x >= 0 && cur.x < C && cur.y >= 0 && cur.y < R) {
            unvisited--;
            ret.push([cur.y, cur.x]);
        }
        arr.push(cur.y + '_' + cur.x);
    };
    let unvisited = R * C;
    let arr = [];
    let ret = [];
    let cur = { x: c0, y: r0 };
    check();
    let dir = ['r', 'b', 'l', 't'];
    while (true) {
        switch (dir[0]) {
            case 'r': {
                cur.x++;
                check();
                if (!arr.includes((cur.y + 1) + '_' + cur.x)) dir.push(dir.shift());
                break;
            }
            case 'b': {
                cur.y++;
                check();
                if (!arr.includes(cur.y + '_' + (cur.x - 1))) dir.push(dir.shift());
                break;
            }
            case 'l': {
                cur.x--;
                check();
                if (!arr.includes((cur.y - 1) + '_' + cur.x)) dir.push(dir.shift());
                break;
            }
            case 't': {
                cur.y--;
                check();
                if (!arr.includes(cur.y + '_' + (cur.x + 1))) dir.push(dir.shift());
                break;
            }
            default: {
                break;
            }
        }
        if (unvisited == 0) break;
    }
    return ret;
};