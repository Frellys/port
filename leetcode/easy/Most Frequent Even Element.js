// Given an integer array nums, return the most frequent even element.
// If there is a tie, return the smallest one.
// If there is no such element, return -1.

/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
    let seen = nums.reduce((acc, cur) => {
        if (!(cur in acc)) {
            acc[cur] = 0;
        }
        acc[cur]++;
        return acc;
    }, {});
    let evens = Object.keys(seen).filter(key => !(key % 2));
    let max = Math.max.apply(null, evens.map(key => seen[key]));
    return (evens.length) ? Math.min.apply(null, evens.filter(key => seen[key] == max)) : -1;
};