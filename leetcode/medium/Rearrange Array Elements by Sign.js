// You are given a 0 - indexed integer array nums of even length consisting of an equal number of positive and negative integers.
// You should rearrange the elements of nums such that the modified array follows the given conditions:
// - Every consecutive pair of integers have opposite signs.
// - For all integers with the same sign, the order in which they were present in nums is preserved.
// - The rearranged array begins with a positive integer.
// Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    let arr = { p: [], n: [] };
    nums.forEach(n => {
        arr[((n > 0) ? 'p' : 'n')].push(n);
    });
    let idx = 0;
    let cap = arr.p.length;
    let ret = [];
    while (idx < cap) {
        ret.push(arr.p[idx]);
        ret.push(arr.n[idx]);
        idx++;
    }
    return ret;
};