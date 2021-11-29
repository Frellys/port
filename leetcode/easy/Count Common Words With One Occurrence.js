// Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
    let a = {
        short: ((words1.length < words2.length) ? words1 : words2),
        long: ((words1.length < words2.length) ? words2 : words1)
    };
    return Array.from(new Set(a.short)).reduce(function (acc, cur) {
        let fs = a.short.indexOf(cur);
        let fl = a.long.indexOf(cur);
        return acc + (fs != -1 && fl != -1 && fs === a.short.lastIndexOf(cur) && fl === a.long.lastIndexOf(cur));
    }, 0);
};