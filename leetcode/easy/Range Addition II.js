// You are given an m x n matrix M initialized with all 0's and an array of operations ops,
// where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.
// Count and return the number of maximum integers in the matrix after performing all the operations.

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
    if (ops.length == 0) return (m * n);
    let min = {
        r: ops[0][0],
        c: ops[0][1]
    };
    ops.forEach(function (el) {
        if (min.r > el[0] && el[0] != 0) min.r = el[0];
        if (min.c > el[1] && el[1] != 0) min.c = el[1];
    });
    return (min.r * min.c);
};