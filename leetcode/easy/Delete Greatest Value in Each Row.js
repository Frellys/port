// You are given an m x n matrix grid consisting of positive integers.
// Perform the following operation until grid becomes empty:
// - Delete the element with the greatest value from each row. If multiple such elements exist, delete any of them.
// - Add the maximum of deleted elements to the answer.
// Note that the number of columns decreases by one after each operation.
// Return the answer after performing the operations described above.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
    return grid.map(row => row.sort((a, b) => b - a))[0].reduce((acc, cur, cdx) => {
        let tmp = new Array(grid.length).fill(false).map((el, edx) => grid[edx][cdx]);
        return acc + Math.max.apply(null, tmp);
    }, 0);
};