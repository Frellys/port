// Given a triangle, find the minimum path sum from top to bottom.
// Each step you may move to adjacent numbers on the row below.

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    return triangle.reverse().reduce(function (prev, cur) {
        return cur.map(function (n, i) { return (Math.min(prev[i], prev[i + 1]) + n); });
    })[0];
};