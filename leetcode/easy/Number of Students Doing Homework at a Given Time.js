// Given two integer arrays startTime and endTime and given an integer queryTime.
// The ith student started doing their homework at the time startTime[i] and finished it at time endTime[i].
// Return the number of students doing their homework at time queryTime.
// More formally, return the number of students where queryTime lays in the interval[startTime[i], endTime[i]] inclusive.

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {
    let ret = 0;
    let students = startTime.length;
    for (let i = 0; i < students; i++) {
        if (queryTime >= startTime[i] && queryTime <= endTime[i]) ret++;
    }
    return ret;
};