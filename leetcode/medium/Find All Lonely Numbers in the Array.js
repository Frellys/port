// You are given an integer array nums.
// A number x is lonely when it appears only once, and no adjacent numbers (i.e. x + 1 and x - 1) appear in the array.
// Return all lonely numbers in nums.You may return the answer in any order.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function (nums) {
    let seen = Object.fromEntries(Array.from(new Set(nums)).map(k => [k, 0]));
    nums.forEach(function (n) {
        seen[n]++;
    });
    return nums.filter(function (n) {
        return seen[n] == 1 && !seen[n - 1] && !seen[n + 1];
    });
};