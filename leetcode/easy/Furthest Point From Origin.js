// You are given a string moves of length n consisting only of characters 'L', 'R', and '_'.
// The string represents your movement on a number line starting from the origin 0.
// In the ith move, you can choose one of the following directions:
// - move to the left if moves[i] = 'L' or moves[i] = '_'
// - move to the right if moves[i] = 'R' or moves[i] = '_'
// Return the distance from the origin of the furthest point you can get to after n moves.

/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function (moves) {
    let seen = moves.split('').reduce((acc, cur) => {
        if (cur === '_') {
            acc.rem++;
        }
        else {
            acc.diff += ((cur == 'R') ? 1 : -1);
        }
        return acc;
    }, { diff: 0, rem: 0 });
    return Math.abs(seen.diff) + seen.rem;
};