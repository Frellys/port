// You are given a 0-indexed integer array nums.
// A pair of indices i, j where 0 <= i < j < nums.length is called beautiful if the first digit of nums[i] and the last digit of nums[j] are coprime.
// Return the total number of beautiful pairs in nums.
// Two integers x and y are coprime if there is no integer greater than 1 that divides both of them.
// In other words, x and y are coprime if gcd(x, y) == 1, where gcd(x, y) is the greatest common divisor of x and y.

/**
 * @param {number[]} nums
 * @return {number}
 */
var countBeautifulPairs = function (nums) {
    let gcd = function (a, b) {
        return !b ? a : gcd(b, a % b);
    };
    let ret = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            ret += 1 == gcd(
                +nums[i].toString().split('').shift(),
                +nums[j].toString().split('').pop(),
            );
        }
    }
    return ret;
};