// Given a rows x cols matrix mat, where mat[i][j] is either 0 or 1, return the number of special positions in mat.
// A position(i, j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0 - indexed).

/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
    let ret = 0;
    let rows = mat.length;
    let cols = mat[0].length;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (mat[r][c] == 1) {
                let flag = true;
                for (let col = 0; flag && col < cols; col++) {
                    if (col != c && mat[r][col] != 0) flag = false;
                }
                for (let row = 0; flag && row < rows; row++) {
                    if (row != r && mat[row][c] != 0) flag = false;
                }
                if (flag) ret++;
            }
        }
    }
    return ret;
};