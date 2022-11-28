// Given a positive integer n, find the pivot integer x such that:
// - The sum of all elements between 1 and x inclusively equals the sum of all elements between x and n inclusively.
// Return the pivot integer x.
// If no such integer exists, return -1.
// It is guaranteed that there will be at most one pivot index for the given input.

/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
    let sum = new Array(n).fill(false).reduce((acc, cur, cdx) => {
        return acc + cdx + 1;
    }, 0);
    let ret = -1;
    let cur = 0;
    for (let i = 1; i <= n && ret == -1; i++) {
        cur += i;
        if (cur == sum) {
            ret = i;
        }
        sum -= i;
    }
    return ret;
};