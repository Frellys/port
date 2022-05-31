// You are given a 0-indexed string num of length n consisting of digits.
// Return true if for every index i in the range 0 <= i < n, the digit i occurs num[i] times in num, otherwise return false.

/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
    const seen = num.split('').reduce((acc, cur) => {
        if (!(cur in acc)) {
            acc[cur] = 0;
        }
        acc[cur]++;
        return acc;
    }, {});
    return num.split('').every((n, ndx) => (seen[ndx] || 0) === +n);
};