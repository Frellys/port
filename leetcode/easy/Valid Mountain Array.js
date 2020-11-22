// Given an array A of integers, return true if and only if it is a valid mountain array.

/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
    if (A.length < 3) return false;
    let max = A[0];
    let maxPos = 0;
    A.forEach(function (el, idx) {
        if (el > max) {
            max = el;
            maxPos = idx;
        }
    });
    if (maxPos == 0 || maxPos == A.length - 1) return false;
    let flag = true;
    for (let i = 0; i < maxPos; i++) {
        if (A[i] >= A[i + 1]) flag = false;
    }
    for (let i = maxPos; i < A.length - 1; i++) {
        if (A[i] <= A[i + 1]) flag = false;
    }
    return flag;
};