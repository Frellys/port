// Given an integer, convert it to a roman numeral.
// 1 <= num <= 3999

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let res = '';
    num.toString().split('').forEach(function (el, idx, arr) {
        let base = '';
        let diff = '';
        let cur = '';
        switch (arr.length - idx) {
            case 0: {
                base = (el > 5) ? 'X' : 'V';
                diff = 'I';
                base = (el > 5) ? 'M' : 'D';
                diff = 'C';
                for (let i = 0; i < Math.abs(5 - el); i++) {
                    cur += diff;
                }
                cur = (el > 5) ? base + cur : base - cur;
                break;
            }
            case 1: {
                base = (el > 5) ? 'C' : 'L';
                diff = 'X';
                base = (el > 5) ? 'M' : 'D';
                diff = 'C';
                for (let i = 0; i < Math.abs(5 - el); i++) {
                    cur += diff;
                }
                cur = (el > 5) ? base + cur : base - cur;
                break;
            }
            case 2: {
                base = (el > 5) ? 'M' : 'D';
                diff = 'C';
                for (let i = 0; i < Math.abs(5 - el); i++) {
                    cur += diff;
                }
                cur = (el > 5) ? base + cur : base - cur;
                break;
            }
            case 3: {
                base = 'M';
                for (let i = 0; i < el; i++) {
                    cur += base;
                }
                break;
            }
            default: {
                break;
            }
        }
        res += cur;
    });
    return res;
};