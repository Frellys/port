// Given a binary string S(a string consisting only of '0' and '1's) and a positive integer N,
// return true if and only if for every integer X from 1 to N, the binary representation of X is a substring of S.

/**
 * @param {string} S
 * @param {number} N
 * @return {boolean}
 */
var queryString = function (S, N) {
    let flag = true;
    for (let i = 1; i <= N; i++) {
        if (!S.includes(i.toString(2))) {
            flag = false;
            break;
        }
    }
    return flag;
};