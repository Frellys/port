// You are given two 0-indexed integer arrays nums and divisors.
// The divisibility score of divisors[i] is the number of indices j such that nums[j] is divisible by divisors[i].
// Return the integer divisors[i] with the maximum divisibility score.
// If there is more than one integer with the maximum score, return the minimum of them.

/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function (nums, divisors) {
    let seen = Array.from(new Set(divisors)).reduce((acc, cur) => {
        let score = nums.filter(n => !(n % cur)).length;
        acc[score] = (acc[score] || []).concat(cur);
        return acc;
    }, {});
    return Math.min.apply(null, seen[Math.max.apply(null, Object.keys(seen))]);
};