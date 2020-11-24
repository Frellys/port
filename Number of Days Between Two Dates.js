// Write a program to count the number of days between two dates.
// The two dates are given as strings, their format is YYYY - MM - DD as shown in the examples.

/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function (date1, date2) {
    let day = 24 * 60 * 60 * 1000;
    return Math.round(Math.abs(new Date(date1) - new Date(date2)) / day);
};