// Given a non - empty array of integers, return the third maximum number in this array.If it does not exist, return the maximum number.
// The time complexity must be in O(n).

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let max = [];
    nums.forEach(function (num) {
        if (!max.includes(num)) max.push(num);
    });
    max.sort(function (a, b) {
        return a - b;
    });
    return (max.length >= 3) ? max[max.length - 3] : max[max.length - 1];
};