// You are given an array of strings names, and an array heights that consists of distinct positive integers.
// Both arrays are of length n.
// For each index i, names[i] and heights[i] denote the name and height of the ith person.
// Return names sorted in descending order by the people's heights.

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
    return names.map((name, ndx) => {
        return { name, height: heights[ndx] };
    }).sort((a, b) => {
        return b.height - a.height;
    }).map(el => el.name);;
};