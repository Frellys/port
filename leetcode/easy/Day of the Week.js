// Given a date, return the corresponding day of the week for that date.
// The input is given as three integers representing the day, month and year respectively.
// Return the answer as one of the following values { "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" }.

/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function (day, month, year) {
    let weekdayNames = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    return weekdayNames[new Date(year, (month - 1), day).getDay()];
};