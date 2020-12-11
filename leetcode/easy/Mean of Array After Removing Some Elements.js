// Given an integer array arr, return the mean of the remaining integers after removing the smallest 5 % and the largest 5 % of the elements.
// Answers within 10^(-5) of the actual answer will be considered accepted.

/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
    arr.sort(function (a, b) { return a - b; });
    let toRm = arr.length / 20;
    while (toRm > 0) {
        arr.pop();
        arr.shift();
        toRm--;
    }
    return arr.reduce(function (a, b) { return a + b; }) / arr.length;
};