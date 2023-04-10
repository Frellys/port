// Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:
// - answer.length == nums.length.
// - answer[i] = |leftSum[i] - rightSum[i]|.
// Where:
// - leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
// - rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
// Return the array answer.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function (nums) {
    let reducer = function (acc, cur) {
        acc.arr.push(acc.sum);
        acc.sum += cur;
        return acc;
    };
    let l = nums.reduce(reducer, { arr: [], sum: 0 }).arr;
    let r = nums.reverse().reduce(reducer, { arr: [], sum: 0 }).arr.reverse();
    return l.map((n, ndx) => Math.abs(n - r[ndx]));
};