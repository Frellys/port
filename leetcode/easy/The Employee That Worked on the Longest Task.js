// There are n employees, each with a unique id from 0 to n - 1.
// You are given a 2D integer array logs where logs[i] = [idi, leaveTimei] where:
// - idi is the id of the employee that worked on the ith task, and
// - leaveTimei is the time at which the employee finished the ith task. All the values leaveTimei are unique.
// Note that the ith task starts the moment right after the (i - 1)th task ends, and the 0th task starts at time 0.
// Return the id of the employee that worked the task with the longest time. If there is a tie between two or more employees, return the smallest id among them.

/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function (n, logs) {
    let { seen, max } = logs.reduce((acc, [id, val]) => {
        let cur = (val - acc.prev);
        if (!(id in acc.seen)) {
            acc.seen[id] = 0;
        }
        acc.seen[id] = Math.max(acc.seen[id], cur);
        if (acc.max < cur) {
            acc.max = cur;
        }
        acc.prev = val;
        return acc;
    }, {
        prev: 0,
        seen: {},
        max: Number.MIN_SAFE_INTEGER
    });
    return Math.min.apply(null, Object.keys(seen).filter(key => seen[key] == max));
};