// You are given a 0 - indexed integer array nums and two integers key and k.
// A k - distant index is an index i of nums for which there exists at least one index j such that | i - j | <= k and nums[j] == key.
// Return a list of all k - distant indices sorted in increasing order.

/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function (nums, key, k) {
    let seen = {};
    nums.forEach(function (n, ndx) {
        if (n === key) {
            let a = ndx - k;
            if (a < 0) {
                a = 0;
            }
            let b = ndx + k + 1;
            if (b > nums.length) {
                b = nums.length;
            }
            for (let i = a; i < b; i++) {
                if (!(i in seen)) {
                    seen[i] = true;
                }
            }
        }
    });
    return Object.keys(seen).sort((a, b) => a - b);
};