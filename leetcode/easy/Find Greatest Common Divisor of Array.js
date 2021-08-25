// Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.
// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    let min = Math.min.apply(null, nums);
    let max = Math.max.apply(null, nums);
    let gcd = 1;
    for (let cur = 2; cur <= min; cur++) {
        if (!(min % cur) && !(max % cur)) {
            gcd = cur;
        }
    }
    return gcd;
};