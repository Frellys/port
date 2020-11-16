// Given an integer n.Each number from 1 to n is grouped according to the sum of its digits.
// Return how many groups have the largest size.

/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
    let groups = {};
    for (let i = 1; i <= n; i++) {
        let curSum = 0;
        i.toString().split('').forEach(function (num) {
            curSum += parseInt(num);
        });
        if (curSum in groups) {
            groups[curSum]++;
        }
        else {
            groups[curSum] = 1;
        }
    }
    let max = 0;
    let cnt = 0;
    Object.keys(groups).forEach(function (key) {
        if (max == groups[key]) {
            cnt++;
        }
        if (max < groups[key]) {
            max = groups[key];
            cnt = 1;
        }
    });
    return cnt;
};