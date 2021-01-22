// Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array.
// The result should also be sorted in ascending order.
// An integer a is closer to x than an integer b if:
// - | a - x | < | b - x |, or
// - | a - x | == | b - x | and a < b

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
    return arr.sort(function (a, b) { return (Math.abs(a - x) - Math.abs(b - x)); }).slice(0, k).sort(function (a, b) { return (a - b); });
};