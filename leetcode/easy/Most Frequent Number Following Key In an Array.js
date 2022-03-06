// You are given a 0 - indexed integer array nums.
// You are also given an integer key, which is present in nums.
// For every unique integer target in nums, count the number of times target immediately follows an occurrence of key in nums.
// In other words, count the number of indices i such that:
// - 0 <= i <= n - 2,
// - nums[i] == key and,
// - nums[i + 1] == target.
// Return the target with the maximum count.
// The test cases will be generated such that the target with maximum count is unique.

/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function (nums, key) {
    let seen = {};
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] == key) {
            let k = nums[i + 1];
            if (!(k in seen)) {
                seen[k] = 0;
            }
            seen[k]++;
        }
    }
    let max = Math.max.apply(null, Object.values(seen));
    return +Object.keys(seen).find(k => seen[k] == max);
};