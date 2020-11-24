// Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d]
// if and only if either(a == c and b == d), or(a == d and b == c) - that is, one domino can be rotated to be equal to another domino.
// Return the number of pairs(i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].

/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
    let ret = 0;
    for (let i = 0; i < dominoes.length - 1; i++) {
        for (let j = i + 1; j < dominoes.length; j++) {
            if ((dominoes[i][0] == dominoes[j][0] && dominoes[i][1] == dominoes[j][1]) ||
                (dominoes[i][0] == dominoes[j][1] && dominoes[i][1] == dominoes[j][0])) ret++;
        }
    }
    return ret;
};