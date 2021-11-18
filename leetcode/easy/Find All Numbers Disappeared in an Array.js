// Given an array of integers where 1 <= a[i] <= n(n = size of array), some elements appear twice and others appear once.
// Find all the elements of[1, n] inclusive that do not appear in this array.
// Could you do it without extra space and in O(n) runtime ? You may assume the returned list does not count as extra space.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let ret = [];
    let set = new Set(nums);
    let len = nums.length;
    let delta = len - set.size;
    let cur = 0;
    while (cur < len && ret.length < delta) {
        if (!set.has(++cur)) {
            ret.push(cur);
        }
    }
    return ret;
};