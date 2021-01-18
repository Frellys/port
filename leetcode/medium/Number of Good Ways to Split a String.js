// You are given a string s, a split is called good if you can split s into 2 non - empty strings p and q
// where its concatenation is equal to s and the number of distinct letters in p and q are the same.
// Return the number of good splits you can make in s.

/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function (s) {
    let a = new Set();
    let b = new Set();
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        if (!a.has(s[i])) a.add(s[i]);
        arr.push([a.size, 0]);
    }
    for (let i = s.length - 1; i > 0; i--) {
        if (!b.has(s[i])) b.add(s[i]);
        arr[i - 1][1] = b.size;
    }
    return arr.filter((el) => { return (el[0] == el[1]); }).length;
};