// A boomerang is a set of 3 points that are all distinct and not in a straight line.
// Given a list of three points in the plane, return whether these points are a boomerang.

/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {
    let flag = true;
    if ((points[0][0] == points[1][0] && points[0][1] == points[1][1]) ||
        (points[1][0] == points[2][0] && points[1][1] == points[2][1]) ||
        (points[2][0] == points[0][0] && points[2][1] == points[0][1])) flag = false;
    let d01 = Math.sqrt(Math.pow((points[0][0] - points[1][0]), 2) + Math.pow((points[0][1] - points[1][1]), 2));
    let d12 = Math.sqrt(Math.pow((points[1][0] - points[2][0]), 2) + Math.pow((points[1][1] - points[2][1]), 2));
    let d20 = Math.sqrt(Math.pow((points[2][0] - points[0][0]), 2) + Math.pow((points[2][1] - points[0][1]), 2));
    if ((d01 + d12 == d20) ||
        (d12 + d20 == d01) ||
        (d20 + d01 == d12)) flag = false;
    return flag;
};