// A robot is located at the top - left corner of a m x n grid.
// The robot can only move either down or right at any point in time.
// The robot is trying to reach the bottom - right corner of the grid.
// How many possible unique paths are there ?

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    if (m == 1 || n == 1) return 1;
    if (m < n) [m, n] = [n, m];
    let paths = new Array(n).fill(1);
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            paths[j] += paths[j - 1];
        }
    }
    return paths[n - 1];
};