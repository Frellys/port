// Given an m x n matrix.If an element is 0, set its entire row and column to 0.
// Do it in -place.

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let zeroes = [];
    matrix.forEach(function (row, rdx) {
        row.forEach(function (cell, cdx) {
            if (cell == 0) {
                zeroes.push([rdx, cdx]);
            }
        });
    });
    zeroes.forEach(function (el) {
        for (let c = 0; c < matrix[0].length; c++) {
            matrix[el[0]][c] = 0;
        }
        for (let r = 0; r < matrix.length; r++) {
            matrix[r][el[1]] = 0
        }
    });
};