// You are climbing a staircase.It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps.
// In how many distinct ways can you climb to the top ?

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let len = n + 1;
    let ret = new Array(len).fill(0);
    ret[1] = 1;
    ret[2] = 2;
    for (let i = 3; i < len; i++) {
        ret[i] = ret[i - 2] + ret[i - 1];
    }
    return ret[n];
};