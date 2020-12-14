// We have a list of points on the plane.Find the K closest points to the origin(0, 0).
// (Here, the distance between two points on a plane is the Euclidean distance.)
// You may return the answer in any order.The answer is guaranteed to be unique(except for the order that it is in.)

/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
    return points.sort(function (a, b) { return (Math.pow(a[0], 2) + Math.pow(a[1], 2)) - (Math.pow(b[0], 2) + Math.pow(b[1], 2)); }).slice(0, K);
};