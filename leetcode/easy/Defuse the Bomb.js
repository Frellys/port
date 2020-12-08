// You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code of length of n and a key k.
// To decrypt the code, you must replace every number.All the numbers are replaced simultaneously.
// - If k > 0, replace the ith number with the sum of the next k numbers.
// - If k < 0, replace the ith number with the sum of the previous k numbers.
// - If k == 0, replace the ith number with 0.
// As code is circular, the next element of code[n - 1] is code[0], and the previous element of code[0] is code[n - 1].
// Given the circular array code and an integer key k, return the decrypted code to defuse the bomb!

/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
    if (k == 0) return code.map(function (el) { return 0; });
    let ret = [];
    ret = code.map(function (el, edx) {
        let sum = 0;
        let cnt = 0;
        let pos = edx + ((k > 0) ? 1 : -1);
        if (pos < 0 || pos > code.length - 1) pos = Math.abs(code.length - Math.abs(pos));
        while (cnt < Math.abs(k)) {
            sum += code[pos];
            pos = pos + ((k > 0) ? 1 : -1);
            if (pos < 0 || pos > code.length - 1) pos = Math.abs(code.length - Math.abs(pos));
            cnt++;
        }
        return sum;
    });
    return ret;
};