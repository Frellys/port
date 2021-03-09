// You are given two integers, x and y, which represent your current location on a Cartesian grid: (x, y).
// You are also given an array points where each points[i] = [ai, bi] represents that a point exists at(ai, bi).
// A point is valid if it shares the same x - coordinate or the same y - coordinate as your location.
// Return the index(0 - indexed) of the valid point with the smallest Manhattan distance from your current location.
// If there are multiple, return the valid point with the smallest index.
// If there are no valid points, return -1.
// The Manhattan distance between two points(x1, y1) and(x2, y2) is abs(x1 - x2) + abs(y1 - y2).

/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
    let cur = {
        value: Infinity,
        index: Infinity
    };
    points.forEach(function (pt, idx) {
        let tx = pt[0];
        let ty = pt[1];
        if (tx == x || ty == y) {
            let dst = Math.abs(tx - x) + Math.abs(ty - y);
            if (cur.value > dst) {
                cur.value = dst;
                cur.index = idx;
            }
        }
    });
    return (cur.index == Infinity) ? -1 : cur.index;
};