// You are given an array points where points[i] = [xi, yi] is the coordinates of the ith point on a 2D plane.Multiple points can have the same coordinates.
// You are also given an array queries where queries[j] = [xj, yj, rj] describes a circle centered at(xj, yj) with a radius of rj.
// For each query queries[j], compute the number of points inside the jth circle.Points on the border of the circle are considered inside.
// Return an array answer, where answer[j] is the answer to the jth query.

/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function (points, queries) {
    return queries.map(function ([qx, qy, r]) {
        let qdst = Math.pow(r, 2);
        return points.filter(function ([px, py]) {
            return qdst >= Math.pow((qx - px), 2) + Math.pow((qy - py), 2);
        }).length;
    });
};