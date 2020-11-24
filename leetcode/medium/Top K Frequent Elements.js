// Given a non - empty array of integers, return the k most frequent elements.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let freq = {};
    nums.forEach(function (el) {
        let key = el.toString();
        if (key in freq) {
            freq[key]++;
        }
        else {
            freq[key] = 1;
        }
    });
    let ret = [];
    while (k > 0) {
        let max = Object.keys(freq)[0];
        Object.keys(freq).forEach(function (key) {
            if (freq[max] < freq[key]) max = key;
        });
        ret.push(parseInt(max));
        delete freq[max];
        k--;
    }
    return ret;
};