// Given an array of integers where 1 <= a[i] <= n(n = size of array), some elements appear twice and others appear once.
// Find all the elements of[1, n] inclusive that do not appear in this array.
// Could you do it without extra space and in O(n) runtime ? You may assume the returned list does not count as extra space.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let ret = [];
    for (let i = 1; i <= nums.length; i++) {
        if (!nums.includes(i)) ret.push(i);
    }
    return ret;
};