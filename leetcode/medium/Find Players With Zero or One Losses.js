// You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.
// Return a list answer of size 2 where:
// - answer[0] is a list of all players that have not lost any matches.
// - answer[1] is a list of all players that have lost exactly one match.
// The values in the two lists should be returned in increasing order.

/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
    let seen = {};
    matches.forEach(function ([w, l]) {
        if (!(w in seen)) {
            seen[w] = 0;
        }
        if (!(l in seen)) {
            seen[l] = 0;
        }
        seen[l]++;
    });
    let ret = [[], []];
    Object.keys(seen).sort((a, b) => a - b).forEach(k => {
        if (seen[k] < 2) {
            ret[seen[k]].push(k);
        }
    });
    return ret;
};