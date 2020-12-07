// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let mat = [];
    let max = Math.pow(n, 2);
    for (let r = 0; r < n; r++) {
        let row = [];
        for (let c = 0; c < n; c++) row.push(0);
        mat.push(row);
    }
    let cur = { val: 1, x: 0, y: 0 };
    let dir = ['r', 'b', 'l', 't'];
    while (true) {
        mat[cur.y][cur.x] = cur.val;
        if (cur.val == max) break;
        switch (dir[0]) {
            case 'r': {
                if (mat[cur.y][cur.x + 1] == 0) cur.x++;
                else {
                    cur.y++;
                    dir.push(dir.shift());
                }
                break;
            }
            case 'b': {
                if (mat[cur.y + 1] && mat[cur.y + 1][cur.x] == 0) cur.y++;
                else {
                    cur.x--;
                    dir.push(dir.shift());
                }
                break;
            }
            case 'l': {
                if (mat[cur.y][cur.x - 1] == 0) cur.x--;
                else {
                    cur.y--;
                    dir.push(dir.shift());
                }
                break;
            }
            case 't': {
                if (mat[cur.y - 1][cur.x] == 0) cur.y--;
                else {
                    cur.x++;
                    dir.push(dir.shift());
                }
                break;
            }
            default: {
                break;
            }
        };
        cur.val++;
    }
    return mat;
};