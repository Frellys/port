// You are given a 2D integer array ranges and two integers left and right.
// Each ranges[i] = [starti, endi] represents an inclusive interval between starti and endi.
// Return true if each integer in the inclusive range[left, right] is covered by at least one interval in ranges.
// Return false otherwise.
// An integer x is covered by an interval ranges[i] = [starti, endi] if starti <= x <= endi.

/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
    let interval = Array.from(new Array(right - left + 1), (el, edx) => (edx + left));
    let rSet = new Set();
    ranges.forEach(function ([l, r]) {
        while (l <= r) {
            rSet.add(l++);
        }
    });
    return interval.every(el => rSet.has(el));
};