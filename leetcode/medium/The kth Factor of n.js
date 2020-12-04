// Given two positive integers n and k.
// A factor of an integer n is defined as an integer i where n % i == 0.
// Consider a list of all factors of n sorted in ascending order, return the kth factor in this list or return -1 if n has less than k factors.

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function (n, k) {
    let ret = -1;
    let cnt = 0;
    let cur = 0;
    while (n > cur) {
        cur++;
        if (n % cur == 0) {
            cnt++;
            if (cnt == k) {
                ret = cur;
                break;
            }
        }
    }
    return ret;
};