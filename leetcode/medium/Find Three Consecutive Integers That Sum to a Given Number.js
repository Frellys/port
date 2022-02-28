// Given an integer num, return three consecutive integers(as a sorted array) that sum to num.
// If num cannot be expressed as the sum of three consecutive integers, return an empty array.

/**
 * @param {number} num
 * @return {number[]}
 */
var sumOfThree = function (num) {
    let ret = [];
    if (num.toString().split('').reduce((acc, cur) => acc + (+cur), 0) % 3 === 0) {
        let mid = num / 3;
        ret.push(mid - 1);
        ret.push(mid);
        ret.push(mid + 1);
    }
    return ret;
};