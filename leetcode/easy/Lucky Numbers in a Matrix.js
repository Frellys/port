// Given a m * n matrix of distinct numbers, return all lucky numbers in the matrix in any order.
// A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
    let ret = [];
    if (matrix.length != 0) {
        let rows = matrix.length;
        let cols = matrix[0].length;
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                let flag = true;
                for (let col = 0; col < cols; col++) {
                    if (col != c && matrix[r][c] >= matrix[r][col]) flag = false;
                }
                for (let row = 0; row < rows; row++) {
                    if (row != r && matrix[r][c] <= matrix[row][c]) flag = false;
                }
                if (flag) ret.push(matrix[r][c]);
            }
        }
    }
    return ret;
};