// Given a string s containing only digits,
// return the lexicographically smallest string that can be obtained after swapping adjacent digits in s with the same parity at most once.
// Digits have the same parity if both are odd or both are even.
// For example, 5 and 9, as well as 2 and 4, have the same parity, while 6 and 9 do not.

/**
 * @param {string} s
 * @return {string}
 */
var getSmallestString = function (s) {
    let min = s;
    let isSameParity = function () {
        return new Set(Array.from(arguments).map(Number).map(el => el % 2)).size == 1;
    };
    for (let i = 1; i < s.length; i++) {
        let prev = s[i - 1];
        let cur = s[i]
        if (isSameParity(prev, cur)) {
            let tmp = s.split('');
            tmp[i - 1] = cur;
            tmp[i] = prev;
            min = [min, tmp.join('')][+(min > tmp.join(''))];
        }
    }
    return min;
};