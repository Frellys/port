// Given two integer arrays of equal length target and arr.
// In one step, you can select any non - empty sub - array of arr and reverse it.
// You are allowed to make any number of steps.
// Return True if you can make arr equal to target, or False otherwise.

/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
    if (target.length != arr.length) return false;
    target.sort(function (a, b) { return a - b; });
    arr.sort(function (a, b) { return a - b; });
    return (target.join() == arr.join());
};