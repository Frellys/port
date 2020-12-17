// You are given a list of non - negative integers, a1, a2, ..., an, and a target, S.
// Now you have 2 symbols + and -.For each integer, you should choose one from + and - as its new symbol.
// Find out how many ways to assign symbols to make sum of integers equal to target S.

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function (nums, S) {
    let cur = 0;
    let cnt = 0;
    function traverse(n, sum) {
        cur++;
        sum += n;
        if (cur == nums.length) {
            if (sum == S) cnt++;
        }
        else {
            traverse(nums[cur], sum);
            traverse(-nums[cur], sum);
        }
        cur--;
    };
    traverse(nums[0], 0);
    traverse(-nums[0], 0);
    return cnt;
};