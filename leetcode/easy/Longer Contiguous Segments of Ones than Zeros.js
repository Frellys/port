// Given a binary string s, return true if the longest contiguous segment of 1s is strictly longer than the longest contiguous segment of 0s in s.
// Return false otherwise.
// For example, in s = "110100010" the longest contiguous segment of 1s has length 2, and the longest contiguous segment of 0s has length 3.
// Note that if there are no 0s, then the longest contiguous segment of 0s is considered to have length 0.
// The same applies if there are no 1s.

/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
    let cnt = {
        '0': { cur: 0, max: 0 },
        '1': { cur: 0, max: 0 },
        lastChar: s[0]
    };
    s.split('').forEach(function (ch) {
        cnt[ch].cur++;
        if (cnt[cnt.lastChar].max < cnt[cnt.lastChar].cur) {
            cnt[cnt.lastChar].max = cnt[cnt.lastChar].cur;
        }
        if (ch != cnt.lastChar) {
            cnt[cnt.lastChar].cur = 0;
        }
        cnt.lastChar = ch;
    });
    return (cnt['1'].max > cnt['0'].max);
};