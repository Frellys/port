// You are given an array coordinates, coordinates[i] = [x, y], where[x, y] represents the coordinate of a point.
// Check if these points make a straight line in the XY plane.

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
    if (coordinates.length == 2) return true;
    let y_coords = [];
    let slopes = [];
    coordinates.forEach(function (el, idx) {
        if (!y_coords.includes(el[1])) y_coords.push(el[1]);
        if (idx != 0) {
            let slope = (el[0] - coordinates[0][0]) / (el[1] - coordinates[0][1]);
            slopes.push(slope);
        }
    });
    return (y_coords.length == 1) ? true : (new Set(slopes).size == 1);
};