// Given an array A of non - negative integers, half of the integers in A are odd, and half of the integers are even.
// Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.
// You may return any answer array that satisfies this condition.

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
    let odd = A.filter(function (el) { return el % 2 != 0; });
    let even = A.filter(function (el) { return el % 2 == 0; });
    let ret = [];
    for (let i = 0; i < A.length; i++) {
        ret.push((i % 2 == 0) ? even.shift() : odd.shift());
    }
    return ret;
};