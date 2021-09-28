// Given an array A of non - negative integers, half of the integers in A are odd, and half of the integers are even.
// Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.
// You may return any answer array that satisfies this condition.

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
    let odd = [];
    let even = [];
    A.forEach(el => ((el % 2) ? odd : even).push(el));
    let ret = [];
    let flag = true;
    A.forEach(() => ret.push(((flag = !flag) ? odd : even).pop()));
    return ret;
};