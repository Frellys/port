// You are given a sorted unique integer array nums.
// Return the smallest sorted list of ranges that cover all the numbers in the array exactly.
// That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    let ret = [];
    let cur = [];
    nums.forEach(function (num) {
        if (cur.length == 0) {
            cur.push(num);
        }
        else {
            if (num == cur[cur.length - 1] + 1) {
                cur.push(num);
            }
            else {
                if (cur.length == 1) ret.push(cur[0].toString());
                else ret.push(cur[0].toString() + '->' + cur[cur.length - 1].toString());
                cur = [];
                cur.push(num);
            }
        }
    });
    if (cur.length != 0) {
        if (cur.length == 1) ret.push(cur[0].toString());
        else ret.push(cur[0].toString() + '->' + cur[cur.length - 1].toString());
    }
    return ret;
};