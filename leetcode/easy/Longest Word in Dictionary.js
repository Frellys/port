// Given a list of strings words representing an English Dictionary, find the longest word in words that can be built one character at a time by other words in words.
// If there is more than one possible answer, return the longest word with the smallest lexicographical order.
// If there is no answer, return the empty string.

/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
    let ret = {};
    words.sort(function (a, b) { return a.length - b.length; });
    words.forEach(function (word) {
        let cur = word;
        let flag = true;
        while (flag && cur.length > 1) {
            cur = cur.slice(0, -1);
            if (words.includes(cur) == false) {
                flag = false;
            }
        }
        if (flag) {
            let key = word.length.toString();
            if ((key in ret) == false) ret[key] = [];
            ret[key].push(word);
        }
    });
    let max = Math.max.apply(null, Object.keys(ret).map(function (el) { return parseInt(el); }));
    ret[max].sort();
    return ret[max].shift();
};