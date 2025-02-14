// You are given a string date representing a Gregorian calendar date in the yyyy-mm-dd format.
// date can be written in its binary representation obtained by converting year, month,
// and day to their binary representations without any leading zeroes and writing them down in year-month-day format.
// Return the binary representation of date.

/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function (date) {
    return date.split('-').map(s => (+s).toString(2)).join('-');
};