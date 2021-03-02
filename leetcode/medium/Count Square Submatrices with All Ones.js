// Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
    let ret = 0;
    let rows = matrix.length;
    let cols = matrix[0].length;
    let max = Math.min(rows, cols);
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            for (let size = 1; size <= max; size++) {
                let flag = true;
                outer: for (let tr = r; tr < r + size; tr++) {
                    for (let tc = c; tc < c + size; tc++) {
                        if (!matrix[tr] || !matrix[tr][tc]) {
                            flag = false;
                            break outer;
                        }
                    }
                }
                if (flag) ret++;
            }
        }
    }
    return ret;
};