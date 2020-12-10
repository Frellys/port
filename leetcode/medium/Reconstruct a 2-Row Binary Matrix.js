// Given the following details of a matrix with n columns and 2 rows:
// - The matrix is a binary matrix, which means each element in the matrix can be 0 or 1.
// - The sum of elements of the 0 - th(upper) row is given as upper.
// - The sum of elements of the 1 - st(lower) row is given as lower.
// - The sum of elements in the i - th column(0 - indexed) is colsum[i], where colsum is given as an integer array with length n.
// Your task is to reconstruct the matrix with upper, lower and colsum.
// Return it as a 2 - D integer array.
// If there are more than one valid solution, any of them will be accepted.
// If no valid solution exists, return an empty 2 - D array.

/**
 * @param {number} upper
 * @param {number} lower
 * @param {number[]} colsum
 * @return {number[][]}
 */
var reconstructMatrix = function (upper, lower, colsum) {
    let ret = [];
    let flag = (upper + lower == colsum.reduce(function (a, b) { return a + b; }));
    flag = (flag && colsum.filter(function (el) { return el != 0; }).length >= upper);
    flag = (flag && colsum.filter(function (el) { return el != 0; }).length >= lower);
    if (flag) {
        ret.push([], []);
        let dds = colsum.filter(function (el) { return el == 2; }).length;
        upper = upper - dds;
        lower = lower - dds;
        colsum.forEach(function (sum) {
            switch (sum) {
                case 0: {
                    ret[0].push(0);
                    ret[1].push(0);
                    break;
                }
                case 1: {
                    if (lower) {
                        ret[0].push(0);
                        ret[1].push(1);
                        lower--;
                    }
                    else {
                        ret[0].push(1);
                        ret[1].push(0);
                        upper--;
                    }
                    break;
                }
                case 2: {
                    ret[0].push(1);
                    ret[1].push(1);
                    break;
                }
                default: {
                    break;
                }
            };
        });
    }
    return ret;
};