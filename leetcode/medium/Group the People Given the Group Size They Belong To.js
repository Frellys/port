// There are n people that are split into some unknown number of groups.
// Each person is labeled with a unique ID from 0 to n - 1.
// You are given an integer array groupSizes, where groupSizes[i] is the size of the group that person i is in.
// For example, if groupSizes[1] = 3, then person 1 must be in a group of size 3.
// Return a list of groups such that each person i is in a group of size groupSizes[i].
// Each person should appear in exactly one group, and every person must be in a group.
// If there are multiple answers, return any of them.
// It is guaranteed that there will be at least one valid solution for the given input.

/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
    let ret = [];
    let sizes = {};
    groupSizes.forEach(function (size, idx) {
        let key = size.toString();
        if ((key in sizes) == false) sizes[key] = [];
        sizes[key].push(idx);
    });
    Object.keys(sizes).forEach(function (key) {
        sizes[key].reverse();
        while (sizes[key].length) {
            let cur = [];
            while (cur.length != parseInt(key)) {
                cur.push(sizes[key].pop());
            }
            ret.push(cur);
        }
    });
    return ret;
};