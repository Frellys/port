// You are given a 0-indexed string s typed by a user.
// Changing a key is defined as using a key different from the last used key.
// For example, s = "ab" has a change of a key while s = "bBBb" does not have any.
// Return the number of times the user had to change the key.

/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function (s) {
    return s.toLowerCase().split('').reduce((acc, cur) => {
        if (acc.last != cur) {
            acc.last = cur;
            acc.cnt++;
        }
        return acc;
    }, { last: '', cnt: -1 }).cnt;
};