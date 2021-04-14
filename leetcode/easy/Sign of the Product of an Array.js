// There is a function signFunc(x) that returns:
// - 1 if x is positive.
// - -1 if x is negative.
// - 0 if x is equal to 0.
// You are given an integer array nums.Let product be the product of all values in the array nums.
// Return signFunc(product).

/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
    let ret = 0;
    if (nums.includes(0) == false) {
        let seen = {
            'true': 0,
            'false': 0
        };
        nums.forEach(function (el) {
            seen[(el > 0).toString()]++;
        });
        ret = (seen['false'] % 2 == 1) ? -1 : 1;
    }
    return ret;
};