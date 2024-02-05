// You are given three strings s1, s2, and s3. You have to perform the following operation on these three strings as many times as you want.
// In one operation you can choose one of these three strings such that its length is at least 2 and delete the rightmost character of it.
// Return the minimum number of operations you need to perform to make the three strings equal if there is a way to make them equal, otherwise, return -1.

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */
var findMinimumOperations = function (s1, s2, s3) {
    let diff = 0;
    let arr = Array.from(arguments);
    let cap = Math.min.apply(null, arr.map(s => s.length));
    for (let i = 0; i < cap && new Set(arr.map(s => s[i])).size == 1; i++) {
        diff += arr.length;
    }
    return (diff) ? arr.reduce((acc, cur) => acc + cur.length, 0) - diff : -1;
};