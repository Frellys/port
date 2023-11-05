// You are given an integer array nums.
// You need to create a 2D array from nums satisfying the following conditions:
// - The 2D array should contain only the elements of the array nums.
// - Each row in the 2D array contains distinct integers.
// - The number of rows in the 2D array should be minimal.
// Return the resulting array.
// If there are multiple answers, return any of them.
// Note that the 2D array can have a different number of elements on each row.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
    let seen = nums.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});
    return new Array(Math.max.apply(null, Object.values(seen))).fill(false).map(() => {
        let cur = Object.keys(seen).filter(key => seen[key]).map(Number);
        cur.forEach(key => seen[key]--);
        return cur;
    });
};