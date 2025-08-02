// You are given an integer array nums.
// Return the smallest index i such that the sum of the digits of nums[i] is equal to i.
// If no such index exists, return -1.

/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function (nums) {
    return nums.reduce((acc, cur, cdx) => {
        if (acc < 0) {
            if (cdx == cur.toString().split('').map(Number).reduce((a, c) => a + c)) {
                acc = cdx;
            }
        }
        return acc;
    }, -1);
};