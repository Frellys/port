// Given a string s and a string array dictionary, return the longest string in the dictionary that can be formed by deleting some of the given string characters.
// If there is more than one possible result, return the longest word with the smallest lexicographical order.
// If there is no possible result, return the empty string.

/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
    let ret = '';
    let chars = {};
    s.split('').forEach(function (ch, idx) {
        if ((ch in chars) == false) chars[ch] = [];
        chars[ch].push(idx);
    });
    dictionary.forEach(function (word) {
        let cur = word.split('');
        if (cur.every(function (ch) { return (ch in chars); })) {
            let pos = -1;
            let flag = true;
            cur.forEach(function (ch) {
                if (flag) {
                    let tmp = chars[ch].filter(function (el) { return el > pos; });
                    if (tmp.length) {
                        pos = tmp[0];
                    }
                    else {
                        flag = false;
                    }
                }
            });
            if (flag) {
                if (ret.length <= word.length) {
                    if (ret.length < word.length) {
                        ret = word;
                    }
                    else {
                        if (ret > word) {
                            ret = word;
                        }
                    }
                }
            }
        }
    });
    return ret;
};