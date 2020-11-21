// Given a positive integer n, find and return the longest distance between any two adjacent 1's in the binary representation of n.
// If there are no two adjacent 1's, return 0.
// Two 1's are adjacent if there are only 0's separating them(possibly no 0's). The distance between two 1's is the absolute difference between their bit positions.
// For example, the two 1's in "1001" have a distance of 3.

/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
    let indexes = [];
    (n >>> 0).toString(2).split('').forEach(function (el, idx) {
        if (el == '1') indexes.push(idx);
    });
    if (indexes.length < 2) return 0;
    let diff = [];
    for (let i = 0; i < indexes.length - 1; i++) {
        diff.push(Math.abs(indexes[i] - indexes[i + 1]));
    }
    diff.sort(function (a, b) {
        return a - b;
    });
    return diff.pop();
};