// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
// After doing so, return the array.

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
    let ret = [];
    while (arr.length > 1) {
        arr.shift();
        ret.push(Math.max.apply(null, arr));
    };
    ret.push(-1);
    return ret;
};