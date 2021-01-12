// Given an array nums of 0s and 1s and an integer k, return True if all 1's are at least k places away from each other, otherwise return False.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
    let flag = false;
    let cnt = 0;
    let dst = [];
    nums.forEach(function (n) {
        if (flag) {
            cnt++;
            if (n == 1) {
                dst.push(cnt - 1);
                cnt = 0;
            }
        }
        if (n == 1) flag = true;
    });
    return dst.every(function (el) { return (el >= k); });
};