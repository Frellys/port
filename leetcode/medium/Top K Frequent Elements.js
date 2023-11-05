// Given a non - empty array of integers, return the k most frequent elements.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    return Object.entries(nums.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {})).sort((a, b) => b[1] - a[1]).splice(0, k).map(([k]) => parseInt(k));
};