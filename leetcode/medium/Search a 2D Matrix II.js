// Write an efficient algorithm that searches for a target value in an m x n integer matrix.
// The matrix has the following properties:
// - Integers in each row are sorted in ascending from left to right.
// - Integers in each column are sorted in ascending from top to bottom.

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let ret = false;
    let rows = matrix.length;
    let cols = matrix[0].length;
    for (let i = 0; i < rows && !ret; i++) {
        for (let j = 0; j < cols && !ret; j++) {
            if (matrix[i][j] > target) break;
            if (matrix[i][j] == target) ret = true;
        }
    }
    return ret;
};