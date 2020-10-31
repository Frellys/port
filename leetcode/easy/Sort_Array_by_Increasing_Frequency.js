// Given an array of integers nums, sort the array in increasing order based on the frequency of the values.
// If multiple values have the same frequency, sort them in decreasing order.
// Return the sorted array.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    let seen = {};
    nums.forEach(function (el) {
        if (el in seen) seen[el.toString()]++;
        else seen[el.toString()] = 1;
    });
    let max = seen[Object.keys(seen)[0]];
    Object.keys(seen).forEach(function (el) {
        if (max > seen[el]) max = seen[el];
    });
    let ret = [];
    while (Object.keys(seen).length != 0) {
        let cur = [];
        Object.keys(seen).reverse().forEach(function (el) {
            if (seen[el] == max) cur.push(parseInt(el));
        });
        cur.sort(function (a, b) { return a - b; });
        cur.reverse().forEach(function (el) {
            for (let i = 0; i < seen[el.toString()]; i++) ret.push(parseInt(el));
            delete seen[el.toString()];
        });
        max++;
    }
    return ret;
};