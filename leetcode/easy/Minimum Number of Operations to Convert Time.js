// You are given two strings current and correct representing two 24 - hour times.
// 24 - hour times are formatted as "HH:MM", where HH is between 00 and 23, and MM is between 00 and 59.
// The earliest 24 - hour time is 00: 00, and the latest is 23: 59.
// In one operation you can increase the time current by 1, 5, 15, or 60 minutes.
// You can perform this operation any number of times.
// Return the minimum number of operations needed to convert current to correct.

/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function (current, correct) {
    let getMinutes = function (time) {
        let [h, m] = time.split(':').map(t => +t);
        return (h * 60) + m;
    };
    let cur = getMinutes(current);
    let cor = getMinutes(correct);
    let steps = [60, 15, 5, 1];
    let ret = 0;
    while (cur < cor) {
        let delta = cor - cur;
        let shift = steps.find(s => delta >= s);
        cur += shift;
        ret++;
    }
    return ret;
};