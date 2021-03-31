// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
// and return an array of the non - overlapping intervals that cover all the intervals in the input.

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
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
    return ret;
};