// You are given two positive integers low and high.
// An integer x consisting of 2 * n digits is symmetric if the sum of the first n digits of x is equal to the sum of the last n digits of x.
// Numbers with an odd number of digits are never symmetric.
// Return the number of symmetric integers in the range [low, high].

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
    let cnt = 0;
    for (let i = low; i <= high; i++) {
        let str = i.toString();
        let len = str.length;
        if (!(len % 2)) {
            let mid = len / 2;
            cnt += (1 == new Set([
                str.substring(0, mid),
                str.substring(mid)
            ].map(s => s.split('').map(Number).reduce((acc, cur) => acc + cur, 0))).size);
        }
    }
    return cnt;
};