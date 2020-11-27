// Given an m x n matrix, return all elements of the matrix in spiral order.

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let ret = [];
    let state = 'top';
    while (true) {
        switch (state) {
            case 'top': {
                while (matrix[0].length != 0) {
                    ret.push(matrix[0].shift());
                }
                matrix.shift();
                state = 'right';
                break;
            }
            case 'right': {
                for (let i = 0; i < matrix.length; i++) {
                    ret.push(matrix[i].pop());
                }
                state = 'bottom';
                break;
            }
            case 'bottom': {
                while (matrix[matrix.length - 1].length != 0) {
                    ret.push(matrix[matrix.length - 1].pop());
                }
                matrix.pop();
                state = 'left';
                break;
            }
            case 'left': {
                for (let i = matrix.length - 1; i >= 0; i--) {
                    ret.push(matrix[i].shift());
                }
                state = 'top';
                break;
            }
            default: {
                break;
            }
        }
        if (matrix.length == 0 || matrix[0].length == 0) break;
    }
    return ret;
};