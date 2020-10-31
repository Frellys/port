// Given an array of numbers arr.
// A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.
// Return true if the array can be rearranged to form an arithmetic progression, otherwise, return false.

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
    arr.sort(function (a, b) {
        return a - b;
    });
    let ret = true;
    let delta = Math.abs(arr[0] - arr[1]);
    for (let i = 0; i < arr.length - 1; i++) {
        if (Math.abs(arr[i] - arr[i + 1]) != delta) {
            ret = false;
            break;
        }
    }
    return ret;
};