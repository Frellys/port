// Given an integer, convert it to a roman numeral.
// 1 <= num <= 3999

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let res = '';
    num.toString().split('').forEach(function (el, idx, arr) {
        let base;
        let diff;
        switch (arr.length - idx) {
            case 0: {
                base = (el > 5) ? 'X' : 'V';
                diff = 'I';
                break;
            }
            default: {
                break;
            }
        }
    });
};