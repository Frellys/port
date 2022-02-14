// Given an integer n and an integer array rounds.
// We have a circular track which consists of n sectors labeled from 1 to n.
// A marathon will be held on this track, the marathon consists of m rounds.
// The ith round starts at sector rounds[i - 1] and ends at sector rounds[i].
// For example, round 1 starts at sector rounds[0] and ends at sector rounds[1]
// Return an array of the most visited sectors sorted in ascending order.
// Notice that you circulate the track in ascending order of sector numbers in the counter - clockwise direction(See the first example).

/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function (n, rounds) {
    let seen = Object.fromEntries(new Array(n).fill(0).map((el, edx) => [edx + 1, 0]));
    let pos = rounds.pop();
    seen[pos]++;
    while (rounds.length) {
        pos--;
        if (!pos) {
            pos += n;
        }
        seen[pos]++;
        if (rounds[rounds.length - 1] === pos) {
            rounds.pop();
        }
    }
    let max = Math.max.apply(null, Object.values(seen));
    return Object.keys(seen).filter(key => seen[key] === max);
};