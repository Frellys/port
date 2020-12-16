// We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.
// Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.
// A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    let freq = {};
    nums.forEach(function (n) {
        let key = n.toString();
        freq[key] = (key in freq) ? freq[key] + 1 : 1;
    });
    let keys = Object.keys(freq);
    keys.sort(function (a, b) { return (parseInt(a) - parseInt(b)); });
    let max = 0;
    for (let i = 1; i < keys.length; i++) {
        if (Math.abs(keys[i - 1] - keys[i]) == 1) {
            let tmp = freq[keys[i - 1]] + freq[keys[i]];
            if (max < tmp) max = tmp;
        }
    }
    return max;
};