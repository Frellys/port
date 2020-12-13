// Given a string S that only contains "I"(increase) or "D"(decrease), let N = S.length.
// Return any permutation A of[0, 1, ..., N]such that for all i = 0, ..., N - 1:
// - If S[i] == "I", then A[i] < A[i + 1]
// - If S[i] == "D", then A[i] > A[i + 1]

/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function (S) {
    let ret = [];
    let nums = [];
    for (let i = 0; i <= S.length; i++) nums.push(i);
    S.split('').forEach(function (el) {
        ret.push((el == 'I') ? nums.shift() : nums.pop());
    });
    ret.push(nums.pop());
    return ret;
};