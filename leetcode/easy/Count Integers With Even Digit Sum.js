// Given a positive integer num, return the number of positive integers less than or equal to num whose digit sums are even.
// The digit sum of a positive integer is the sum of all its digits.

/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
    let cnt = 0;
    for (let i = 1; i <= num; i++) {
        let cSum = 0;
        for (let n of i.toString()) {
            cSum += +n;
        }
        if (!(cSum % 2)) {
            cnt++;
        }
    }
    return cnt;
};