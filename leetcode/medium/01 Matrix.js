// Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.
// The distance between two adjacent cells is 1.

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
    let left = matrix.length * matrix[0].length;
    let zeroes = [];
    matrix.forEach(function (row, rdx) {
        row.forEach(function (cell, cdx) {
            if (cell == 0) {
                zeroes.push({ r: rdx, c: cdx });
                left--;
            }
        });
    });
    while (left > 0) {
        matrix.forEach(function (row, rdx) {
            row.forEach(function (cell, cdx) {
                if (cell != 0) {
                    let dist = Math.abs(zeroes[0].r - rdx) + Math.abs(zeroes[0].c - cdx);
                    zeroes.forEach(function (el) {
                        let cur = Math.abs(el.r - rdx) + Math.abs(el.c - cdx);
                        if (dist > cur) dist = cur;
                    });
                    matrix[rdx][cdx] = dist;
                    left--;
                }
            });
        });
    }
    return matrix;
};