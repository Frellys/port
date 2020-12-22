// In a string s of lowercase letters, these letters form consecutive groups of the same character.
// For example, a string like s = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z", and "yy".
// A group is identified by an interval [start, end], where start and end denote the start and end indices(inclusive) of the group.
// In the above example, "xxxx" has the interval[3, 6].
// A group is considered large if it has 3 or more characters.
// Return the intervals of every large group sorted in increasing order by start index.

/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
    let ret = [];
    let len = ++(s.length);
    let start = 0;
    let end = 0;
    for (let i = 1; i < len; i++) {
        if (s[i] == s[i - 1]) {
            end++;
        }
        else {
            if (end - start > 1) {
                ret.push([start, end]);
            }
            start = i;
            end = i;
        }
    }
    return ret;
};