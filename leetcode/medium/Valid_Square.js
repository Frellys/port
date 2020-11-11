// Given the coordinates of four points in 2D space, return whether the four points could construct a square.
// The coordinate(x, y) of a point is represented by an integer array with two integers.

/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {
    function dist(a, b) {
        return (a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1]);
    }
    let dist_12 = dist(p1, p2);
    let dist_13 = dist(p1, p3);
    let dist_14 = dist(p1, p4);
    if (dist_12 == 0 || dist_13 == 0 || dist_14 == 0) return false;
    let side = Math.min(dist_12, dist_13, dist_14);
    let diag = Math.max(dist_12, dist_13, dist_14);
    let flag = true;
    let pts = [p1, p2, p3, p4];
    for (let i = 0; i < pts.length - 1; i++) {
        for (let j = i + 1; j < pts.length; j++) {
            let cur = dist(pts[i], pts[j]);
            if (cur != side && cur != diag) {
                flag = false;
            }
        }
    }
    return flag;
};