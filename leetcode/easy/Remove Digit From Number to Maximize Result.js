// You are given a string number representing a positive integer and a character digit.
// Return the resulting string after removing exactly one occurrence of digit from number such that the value of the resulting string in decimal form is maximized.
// The test cases are generated such that digit occurs at least once in number.

/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function (number, digit) {
    let seen = '';
    let ret = [];
    number.split('').forEach((n, ndx) => {
        if (n === digit) {
            let cur = seen;
            for (let i = ndx + 1; i < number.length; i++) {
                cur += number[i];
            }
            ret.push(cur);
        }
        seen += n;
    });
    return ret.sort().pop();
};