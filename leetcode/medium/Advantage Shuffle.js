// Given two arrays A and B of equal size, the advantage of A with respect to B is the number of indices i for which A[i] > B[i].
// Return any permutation of A that maximizes its advantage with respect to B.

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var advantageCount = function (A, B) {
    let ret = [];
    A.sort(function (a, b) { return a - b; });
    B.forEach(function (b) {
        let tmp = A.filter(function (a) { return a > b; });
        if (tmp.length) {
            let val = tmp[0];
            ret.push(val);
            A.splice(A.indexOf(val), 1);
        }
        else {
            ret.push(false);
        }
    });
    return ret.map(function (el) {
        return (el === false) ? A.pop() : el;
    });
};