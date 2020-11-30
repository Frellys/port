// Given an array A of non - negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.
// You may return any answer array that satisfies this condition.

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
    let ret = [];
    A.forEach(function (el) {
        ret[(el % 2 == 0) ? 'unshift' : 'push'](el);
    });
    return ret;
};