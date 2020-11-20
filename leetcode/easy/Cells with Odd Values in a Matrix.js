// Given n and m which are the dimensions of a matrix initialized by zeros and given an array indices where indices[i] = [ri, ci].
// For each pair of[ri, ci] you have to increment all cells in row ri and column ci by 1.
// Return the number of cells with odd values in the matrix after applying the increment to all indices.

/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (n, m, indices) {
    let matrix = [];
    for (let r = 0; r < n; r++) {
        let row = [];
        for (let c = 0; c < m; c++) {
            row.push(0);
        }
        matrix.push(row);
    }
    indices.forEach(function (el) {
        matrix.forEach(function (row, rdx) {
            row.forEach(function (cell, cdx) {
                if (rdx == el[0]) matrix[rdx][cdx]++;
                if (cdx == el[1]) matrix[rdx][cdx]++;
            });
        });
    });
    let ret = 0;
    matrix.forEach(function (row) {
        row.forEach(function (cell) {
            if (cell % 2 != 0) ret++;
        });
    });
    return ret;
};