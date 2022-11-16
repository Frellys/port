// You are given two arrays of strings that represent two inclusive events that happened on the same day, event1 and event2, where:
// - event1 = [startTime1, endTime1] and
// - event2 = [startTime2, endTime2].
// Event times are valid 24 hours format in the form of HH:MM.
// A conflict happens when two events have some non-empty intersection (i.e., some moment is common to both events).
// Return true if there is a conflict between two events.
// Otherwise, return false.

/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function (event1, event2) {
    let events = Array.from(arguments).map(event => {
        return event.map(time => {
            let [h, m] = time.split(':').map(el => +el);
            return (60 * h + m);
        });
    });
    let min = Math.max.apply(null, events.map(el => el[0]));
    let max = Math.min.apply(null, events.map(el => el[1]));
    let ret = false;
    for (let i = min; i <= max && !ret; i++) {
        ret = events.every(el => (i >= el[0] && i <= el[1]));
    }
    return ret;
};