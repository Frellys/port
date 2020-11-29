// Balanced strings are those who have equal quantity of 'L' and 'R' characters.
// Given a balanced string s split it in the maximum amount of balanced strings.
// Return the maximum amount of splitted balanced strings.

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let ret = 0;
    for (let i = 1; i <= s.length; i += 2) {
        let tempStr = s.slice(0, i + 1);
        if (tempStr.length == 0) break;
        let freq = {
            'L': 0,
            'R': 0
        };
        for (let j = 0; j < tempStr.length; j++) {
            let key = tempStr[j];
            if (key in freq) freq[key]++;
        }
        if (freq['L'] == freq['R']) {
            s = s.slice(i + 1);
            ret++;
            i = -1;
        }
    }
    return (s.length == 0) ? ret : 1;
};