// Let's define a function f(s) over a non-empty string s, which calculates the frequency of the smallest character in s.
// For example, if s = "dcce" then f(s) = 2 because the smallest character is "c" and its frequency is 2.
// Now, given string arrays queries and words,
// return an integer array answer, where each answer[i] is the number of words such that f(queries[i]) < f(W), where W is a word in words.

/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function (queries, words) {
    words.forEach(function (word, wdx) {
        let arr = word.split('').sort();
        words[wdx] = arr.filter(function (ch) { return (ch == arr[0]) }).length;
    });
    return queries.map(function (word) {
        let arr = word.split('').sort();
        let cur = arr.filter(function (ch) { return (ch == arr[0]) }).length;
        return words.filter(function (val) { return (cur < val); }).length;
    });
};