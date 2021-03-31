// A string S of lowercase English letters is given.
// We want to partition this string into as many parts as possible so that each letter appears in at most one part,
// and return a list of integers representing the size of these parts.

/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
    let intervals = [];
    new Set(S.split('')).forEach(function (ch) {
        intervals.push([S.indexOf(ch), S.lastIndexOf(ch)]);
    });
    intervals.sort(function (a, b) { return (b[0] == a[0]) ? b[1] - a[1] : b[0] - a[0]; });
    let ret = [intervals.pop()];
    while (intervals.length) {
        let lst = ret[ret.length - 1];
        let cur = intervals.pop();
        if (cur[0] <= lst[1]) {
            if (lst[1] < cur[1]) {
                lst[1] = cur[1];
            }
        }
        else {
            ret.push(cur);
        }
    }
    return ret.map(function (el) { return (el[1] - el[0] + 1); });
};