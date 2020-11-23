// Given an array of integers arr, a lucky integer is an integer which has a frequency in the array equal to its value.
// Return a lucky integer in the array.If there are multiple lucky integers return the largest of them.If there is no lucky integer return -1.

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    let freq = {};
    arr.forEach(function (el) {
        if (el in freq) {
            freq[el.toString()]++;
        }
        else {
            freq[el.toString()] = 1;
        }
    });
    let ret = -1;
    Object.keys(freq).forEach(function (key) {
        if (parseInt(key) == freq[key] && ret < freq[key]) ret = freq[key];
    });
    return ret;
};