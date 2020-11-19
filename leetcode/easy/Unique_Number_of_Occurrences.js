// Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    let seen = {};
    arr.forEach(function (el) {
        if (el in seen) {
            seen[el]++;
        }
        else {
            seen[el] = 1;
        }
    });
    let occ = [];
    Object.keys(seen).forEach(function (key) {
        occ.push(seen[key]);
    });
    return (new Set(occ).size == occ.length);
};
