// You are keeping score for a baseball game with strange rules.
// The game consists of several rounds, where the scores of past rounds may affect future rounds' scores.
// At the beginning of the game, you start with an empty record.
// You are given a list of strings ops, where ops[i] is the ith operation you must apply to the record and is one of the following:
// - An integer x - Record a new score of x.
// - "+" - Record a new score that is the sum of the previous two scores.It is guaranteed there will always be two previous scores.
// - "D" - Record a new score that is double the previous score.It is guaranteed there will always be a previous score.
// - "C" - Invalidate the previous score, removing it from the record.It is guaranteed there will always be a previous score.
// Return the sum of all the scores on the record.

/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
    let ret = [];
    ops.forEach(function (el) {
        if (el == '+' || el == 'D' || el == 'C') {
            switch (el) {
                case '+': { ret.push(ret[ret.length - 1] + ret[ret.length - 2]); break; }
                case 'D': { ret.push(ret[ret.length - 1] * 2); break; }
                case 'C': { ret.pop(); break; }
                default: { break; }
            }
        }
        else {
            ret.push(parseInt(el));
        }
    });
    let sum = 0;
    ret.forEach(function (el) { sum += el; });
    return sum;
};