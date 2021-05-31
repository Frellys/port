// Given an array of size n, find the majority element.The majority element is the element that appears more than n / 2 times.
// You may assume that the array is non - empty and the majority element always exist in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let seen = {};
    nums.forEach(function (el) {
        let key = el.toString();
        if ((key in seen) == false) {
            seen[key] = 0;
        }
        seen[key]++;
    });
    return Number(Object.keys(seen).find(function (key) { return (seen[key] > nums.length / 2); }));
};