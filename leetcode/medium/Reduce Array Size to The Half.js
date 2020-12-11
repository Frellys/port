// Given an array arr.You can choose a set of integers and remove all the occurrences of these integers in the array.
// Return the minimum size of the set so that at least half of the integers of the array are removed.

/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
    let len = arr.length;
    let freq = {};
    arr.forEach(function (num) {
        let key = num.toString();
        freq[key] = (key in freq) ? freq[key] + 1 : 1;
    });
    let keys = Object.keys(freq);
    keys.sort(function (a, b) { return freq[a] - freq[b]; });
    let ret = 0;
    while (len * 2 > arr.length) {
        len -= freq[keys.pop()];
        ret++;
    }
    return ret;
};