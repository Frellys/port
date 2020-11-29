// Given a non - empty array of non - negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.
// Your task is to find the smallest possible length of a(contiguous) subarray of nums, that has the same degree as nums.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    let freq = {};
    nums.forEach(function (el) {
        let key = el.toString();
        freq[key] = (key in freq) ? freq[key] + 1 : 1;
    });
    let max = 0;
    Object.keys(freq).forEach(function (key) {
        if (max < freq[key]) max = freq[key];
    });
    let min_len = nums.length;
    Object.keys(freq).forEach(function (key) {
        if (freq[key] == max) {
            let el = parseInt(key);
            let cur = nums.lastIndexOf(el) - nums.indexOf(el) + 1;
            if (min_len > cur) min_len = cur;
        }
    });
    return min_len;
};