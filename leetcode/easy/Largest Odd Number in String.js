// You are given a string num, representing a large integer.
// Return the largest - valued odd integer(as a string) that is a non - empty substring of num, or an empty string "" if no odd integer exists.
// A substring is a contiguous sequence of characters within a string.

/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
    let arr = num.split('');
    let idx = -1;
    let odds = new Set(['1', '3', '5', '7', '9']);
    for (let i = arr.length - 1; i >= 0; i--) {
        if (odds.has(arr[i])) {
            idx = (i + 1);
            break;
        }
    }
    return (idx > -1) ? num.substring(0, idx) : '';
};