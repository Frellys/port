// You have a list of points in the plane.Return the area of the largest triangle that can be formed by any 3 of the points.

/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
    let max = 0;
    for (let i = 0; i < points.length - 2; i++) {
        for (let j = i + 1; j < points.length - 1; j++) {
            for (let k = j + 1; k < points.length; k++) {
                let m = (points[i][0] - points[k][0]) * (points[j][1] - points[k][1]);
                let s = (points[j][0] - points[k][0]) * (points[i][1] - points[k][1]);
                let cur = Math.abs(m - s);
                if (max < cur) max = cur;
            }
        }
    }
    return (max / 2);
};