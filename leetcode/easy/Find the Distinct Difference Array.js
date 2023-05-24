// You are given a 0-indexed array nums of length n.
// The distinct difference array of nums is an array diff of length n
// such that diff[i] is equal to the number of distinct elements in the suffix nums[i + 1, ..., n - 1]
// subtracted from the number of distinct elements in the prefix nums[0, ..., i].
// Return the distinct difference array of nums.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function (nums) {
    return nums.reduce(acc => {
        acc.seen.add(acc.left.pop());
        acc.arr.push(acc.seen.size - new Set(acc.left).size);
        return acc;
    }, { arr: [], seen: new Set(), left: Array.from(nums).reverse() }).arr;
};