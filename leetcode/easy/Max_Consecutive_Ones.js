// Given a binary array, find the maximum number of consecutive 1s in this array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let max = 0;
    let cur = 0;
    nums.forEach(function (num) {
        if (num == 1) {
            cur++;
        }
        else {
            if (cur > max) max = cur;
            cur = 0;
        }
    });
    if (cur > max) max = cur;
    return max;
};