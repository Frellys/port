// You are given two positive integers n and k.
// You can choose any bit in the binary representation of n that is equal to 1 and change it to 0.
// Return the number of changes needed to make n equal to k.
// If it is impossible, return -1.

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minChanges = function (n, k) {
    let arr = Array.from(arguments).map(el => el.toString(2));
    let pad = Math.max.apply(null, arr.map(el => el.length));
    let [nStr, kStr] = arr.map(el => el.padStart(pad, '0'));
    let ret = nStr.split('').reduce((acc, cur, cdx) => {
        if (+cur && cur != kStr[cdx]) {
            acc.str += kStr[cdx];
            acc.cnt++;
        }
        else {
            acc.str += cur;
        }
        return acc;
    }, { str: '', cnt: 0 });
    return (ret.str == kStr) ? ret.cnt : -1;
};