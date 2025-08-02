// You have an array of floating point numbers averages which is initially empty.
// You are given an array nums of n integers where n is even.
// You repeat the following procedure n / 2 times:
// - Remove the smallest element, minElement, and the largest element maxElement, from nums.
// - Add (minElement + maxElement) / 2 to averages.
// Return the minimum element in averages.

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {
    let ret = Number.MAX_SAFE_INTEGER;
    let tmp = nums.sort((a, b) => a - b);
    for (let i = 0; i < tmp.length / 2; i++) {
        let avg = (tmp[i] + tmp[tmp.length - 1 - i]) / 2;
        ret = Math.min(ret, avg);
    }
    return ret;
};