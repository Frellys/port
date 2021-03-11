// You are given a string time in the form of hh: mm, where some of the digits in the string are hidden(represented by ?).
// The valid times are those inclusively between 00:00 and 23:59.
// Return the latest valid time you can get from time by replacing the hidden digits.

/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function (time) {
    let ret = time.split('');
    if (ret[0] == '?' && ret[1] == '?') {
        ret[0] = '2';
        ret[1] = '3';
    }
    if (ret[0] == '?') {
        ret[0] = (parseInt(ret[1]) > 3) ? '1' : '2';
    }
    if (ret[1] == '?') {
        ret[1] = (parseInt(ret[0]) == 2) ? '3' : '9';
    }
    if (ret[3] == '?') ret[3] = '5';
    if (ret[4] == '?') ret[4] = '9';
    return ret.join('');
};