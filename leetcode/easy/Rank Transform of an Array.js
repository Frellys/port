// Given an array of integers arr, replace each element with its rank.
// The rank represents how large the element is.The rank has the following rules:
// - Rank is an integer starting from 1.
// - The larger the element, the larger the rank.If two elements are equal, their rank must be the same.
// - Rank should be as small as possible.

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    let ranks = Array.from(new Set(arr));
    ranks.sort(function (a, b) { return a - b; });
    return arr.map(function (num) {
        return (ranks.indexOf(num) + 1);
    });
};