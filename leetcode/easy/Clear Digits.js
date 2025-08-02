// You are given a string s.
// Your task is to remove all digits by doing this operation repeatedly:
// - Delete the first digit and the closest non-digit character to its left.
// Return the resulting string after removing all digits.

/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
    return s.split('').reduceRight((acc, cur) => {
        if (/\d/.test(cur)) {
            acc.cnt++;
        }
        else {
            if (acc.cnt) {
                acc.cnt--;
            }
            else {
                acc.ret = cur + acc.ret;
            }
        }
        return acc;
    }, { ret: '', cnt: 0 }).ret;
};