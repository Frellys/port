// Given a list of 24 - hour clock time points in "HH:MM" format, return the minimum minutes difference between any two time - points in the list.

/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
    let minutes = timePoints.map(function (el) {
        return parseInt(el.split(':')[0]) * 60 + parseInt(el.split(':')[1]);
    });
    minutes.sort(function (a, b) { return (a - b); });
    minutes.push(minutes[0]);
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < minutes.length - 1; i++) {
        let cur1 = Math.abs(minutes[i + 1] - minutes[i]);
        let cur2 = Math.abs(1440 - cur1);
        let cur = Math.min(cur1, cur2);
        if (min > cur) min = cur;
    }
    return min;
};