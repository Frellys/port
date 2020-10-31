// Given n points on a 2D plane where points[i] = [xi, yi], Return the widest vertical area between two points such that no points are inside the area.
// A vertical area is an area of fixed - width extending infinitely along the y - axis(i.e., infinite height).
// The widest vertical area is the one with the maximum width.
// Note that points on the edge of a vertical area are not considered included in the area.

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
    let xarr = [];
    points.forEach(function (point) {
        xarr.push(point[0]);
    });
    xarr.sort(function (a, b) {
        return a - b;
    });
    let max = xarr[1] - xarr[0];
    for (let i = 0; i < xarr.length - 1; i++) {
        if (xarr[i + 1] - xarr[i] > max) max = xarr[i + 1] - xarr[i];
    }
    return max;
};