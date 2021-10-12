// Given an integer array nums of unique elements, return all possible subsets(the power set).
// The solution set must not contain duplicate subsets.Return the solution in any order.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let ret = [[]];
    let cur = [];
    let len = nums.length;
    let traverse = function (idx) {
        cur.push(nums[idx]);
        ret.push(Array.from(cur));
        for (let i = idx + 1; i < len; i++) {
            traverse(i);
        }
        cur.pop();
    };
    for (let i = 0; i < len; i++) {
        traverse(i);
    }
    return ret;
};