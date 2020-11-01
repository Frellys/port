// There is a robot starting at position(0, 0), the origin, on a 2D plane.
// Given a sequence of its moves, judge if this robot ends up at(0, 0) after it completes its moves.
// The move sequence is represented by a string, and the character moves[i] represents its ith move.
// Valid moves are R(right), L(left), U(up), and D(down).If the robot returns to the origin after it finishes all of its moves, return true.
// Otherwise, return false.

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let cnt = {
        'U': 0,
        'D': 0,
        'R': 0,
        'L': 0
    };
    moves.toUpperCase().split('').forEach(function (el) {
        cnt[el]++;
    });
    return (cnt['U'] == cnt['D'] && cnt['R'] == cnt['L']);
};