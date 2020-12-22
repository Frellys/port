// Given two integer arrays A and B, return the maximum length of an subarray that appears in both arrays.

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
    let max = 0;
    let map = new Map();
    for (let i = 0; i < A.length; i++) {
        if (map.has(A[i]) == false) {
            map.set(A[i], B.reduce(function (a, el, idx) { if (el === A[i]) a.push(idx); return a; }, []));
        }
        map.get(A[i]).forEach(function (j) {
            let cur = 1;
            while ((i + cur < A.length) && (j + cur < B.length) && A[i + cur] == B[j + cur]) cur++;
            if (max < cur) max = cur;
        });
    }
    return max;
};