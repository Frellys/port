// Students are asked to stand in non - decreasing order of heights for an annual photo.
// Return the minimum number of students that must move in order for all students to be standing in non - decreasing order of height.
// Notice that when a group of students is selected they can reorder in any possible way between themselves and the non selected students remain on their seats.

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    let arr = heights.slice();
    arr.sort((a, b) => { return (a - b); });
    return arr.filter(function (el, i) {
        return (el != heights[i]);
    }).length;
};