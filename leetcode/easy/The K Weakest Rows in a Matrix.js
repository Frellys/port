// Given a m * n matrix mat of ones(representing soldiers) and zeros(representing civilians),
// return the indexes of the k weakest rows in the matrix ordered from the weakest to the strongest.
// A row i is weaker than row j, if the number of soldiers in row i is less than the number of soldiers in row j,
// or they have the same number of soldiers but i is less than j.
// Soldiers are always stand in the frontier of a row, that is, always ones may appear first and then zeros.

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
    let arr = mat.map(function (row, rdx) {
        return {
            id: rdx,
            str: row.filter(function (el) { return el == 1; }).length
        };
    });
    arr.sort(function (a, b) { return a.str - b.str; });
    return arr.filter(function (row, rdx) { return rdx < k; }).map(function (row) {
        return row.id;
    })
};