// Given a matrix A, return the transpose of A.
// The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
    if (A.length == 0) return [];
    let ret = [];
    A.shift().forEach(function (el) {
        ret.push([el]);
    });
    while (A.length != 0) {
        A.shift().forEach(function (el, edx) {
            ret[edx].push(el);
        });
    }
    return ret;
};