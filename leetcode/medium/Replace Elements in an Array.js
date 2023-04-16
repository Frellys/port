// You are given a 0-indexed array nums that consists of n distinct positive integers.
// Apply m operations to this array, where in the ith operation you replace the number operations[i][0] with operations[i][1].
// It is guaranteed that in the ith operation:
// - operations[i][0] exists in nums.
// - operations[i][1] does not exist in nums.
// Return the array obtained after applying all the operations.

/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = function (nums, operations) {
    let seen = Object.fromEntries(nums.map((n, ndx) => [n, ndx]));
    operations.forEach(([a, b]) => {
        let index = seen[a];
        nums[index] = b;
        seen[b] = index
    });
    return nums;
};