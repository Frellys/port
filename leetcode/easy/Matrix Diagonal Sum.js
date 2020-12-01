// Given a square matrix mat, return the sum of the matrix diagonals.
// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    let sum = 0;
    let skip = (mat.length % 2 != 0) ? Math.floor(mat.length / 2) : -1;
    for (let i = 0; i < mat.length; i++) {
        sum += mat[i][i];
        sum += (i != skip) ? mat[mat.length - (i + 1)][i] : 0;
    }
    return sum;
};