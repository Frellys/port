// Given an array of integers nums, you start with an initial positive value startValue.
// In each iteration, you calculate the step by step sum of startValue plus elements in nums(from left to right).
// Return the minimum positive value of startValue such that the step by step sum is never less than 1.

/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
    let ret = 0;
    while (true) {
        ret++;
        let flag = true;
        let sum = ret;
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
            if (sum < 1) {
                flag = false;
                break;
            }
        }
        if (flag) break;
    }
    return ret;
};