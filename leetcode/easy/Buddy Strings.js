// Given two strings A and B of lowercase letters, return true if you can swap two letters in A so the result is equal to B, otherwise, return false.
// Swapping letters is defined as taking two indices i and j (0 - indexed) such that i != j and swapping the characters at A[i] and A[j].

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function (A, B) {
    if (A.length != B.length) return false;
    let len = A.length;
    let idx = [];
    let freq = {};
    for (let i = 0; i < len; i++) {
        if (A[i] != B[i]) idx.push(i);
        freq[A[i]] = (A[i] in freq) ? freq[A[i]] + 1 : 1;
    }
    if (idx.length == 0) {
        return (Object.keys(freq).filter(function (key) { return freq[key] > 1 }).length != 0);
    }
    if (idx.length != 2) return false;
    let test = B.split('');
    test[idx[0]] = B[idx[1]];
    test[idx[1]] = B[idx[0]];
    return (A == test.join(''));
};