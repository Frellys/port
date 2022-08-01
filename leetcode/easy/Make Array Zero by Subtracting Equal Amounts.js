// You are given a non-negative integer array nums.
// In one operation, you must:
// - Choose a positive integer x such that x is less than or equal to the smallest non-zero element in nums.
// - Subtract x from every positive element in nums.
// Return the minimum number of operations to make every element in nums equal to 0.

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    let ret = 0;
    while (nums.some(n => n)) {
        let min = Math.min.apply(null, nums.filter(n => n));
        nums.forEach((n, ndx) => {
            if (n) {
                nums[ndx] -= min;
            }
        });
        ret++;
    }
    return ret;
};