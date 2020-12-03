// Given an array nums.We define a running sum of an array as runningSum[i] = sum(nums[0]...nums[i]).
// Return the running sum of nums.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let ret = [];
    for (let i = 0; i < nums.length; i++) {
        let n = 0;
        for (let j = 0; j <= i; j++) {
            n += nums[j];
        }
        ret.push(n);
    }
    return ret;
};