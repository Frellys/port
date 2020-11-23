// Given a string date representing a Gregorian calendar date formatted as YYYY - MM - DD, return the day number of the year.

/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
    let target = new Date(date);
    let start = new Date(target.getFullYear(), 0, 0);
    return Math.floor((target - start) / (1000 * 60 * 60 * 24));
};