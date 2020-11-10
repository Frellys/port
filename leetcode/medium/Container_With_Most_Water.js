// Given n non - negative integers a1, a2, ..., an, where each represents a point at coordinate(i, ai).
// n vertical lines are drawn such that the two endpoints of the line i is at(i, ai) and(i, 0).
// Find two lines, which, together with the x - axis forms a container, such that the container contains the most water.

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0;
    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let cnt = (j - i) * Math.min(height[i], height[j]);
            if (max < cnt) max = cnt;
        }
    }
    return max;
};