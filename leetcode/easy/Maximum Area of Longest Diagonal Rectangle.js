// You are given a 2D 0-indexed integer array dimensions.
// For all indices i, 0 <= i < dimensions.length, dimensions[i][0] represents the length and dimensions[i][1] represents the width of the rectangle i.
// Return the area of the rectangle having the longest diagonal.
// If there are multiple rectangles with the longest diagonal, return the area of the rectangle having the maximum area.

/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function (dimensions) {
    return dimensions.reduce((acc, cur) => {
        let d = Math.sqrt(cur.reduce((a, c) => a + c ** 2, 0));
        let s = cur.reduce((a, c) => a * c, 1);
        if (d > acc.d || (d == acc.d && s > acc.s)) {
            acc.d = d;
            acc.s = s;
        }
        return acc;
    }, { d: 0, s: 0 }).s;
};