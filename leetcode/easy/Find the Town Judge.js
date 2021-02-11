// In a town, there are N people labelled from 1 to N.
// There is a rumor that one of these people is secretly the town judge.
// If the town judge exists, then:
// The town judge trusts nobody.
// Everybody(except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.
// If the town judge exists and can be identified, return the label of the town judge.
// Otherwise, return -1.

/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
    if (N == 1) return 1;
    let ret = -1;
    let freq = {};
    trust.forEach(function (t) {
        let key = t[1].toString();
        freq[key] = (key in freq) ? freq[key] + 1 : 1;
    });
    let max = [];
    Object.keys(freq).forEach(function (key) {
        if (freq[key] == N - 1) max.push(key);
    });
    if (max.length == 1) {
        if (trust.some(function (t) { return t[0] == max[0]; }) == false) ret = parseInt(max[0]);
    }
    return ret;
};