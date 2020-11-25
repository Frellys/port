// Given a list of non - negative numbers and a target integer k,
// write a function to check if the array has a continuous subarray of size at least 2 that sums up to a multiple of k, that is, sums up to n * k where n is also an integer.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
    let ret = false;
    for (let i = 0; i < nums.length - 1; i++) {
        sum = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            sum += nums[j];
            if (sum % k == 0 || (sum == 0 && k == 0)) {
                ret = true;
                break;
            }
        }
        if (ret) break;
    }
    return ret;
};