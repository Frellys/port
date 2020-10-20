// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
// - Integers in each row are sorted from left to right.
// - The first integer of each row is greater than the last integer of the previous row.

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let res = false;
    matrix.forEach(function (row, mdx, arr) {
        if ((arr[mdx + 1] && arr[mdx + 1][0] > target) || mdx == arr.length - 1) {
            row.forEach(function (el) {
                if (el == target) res = true;
            });
        }
    });
    return res;
};