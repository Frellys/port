// You are given a string s of even length.
// Split this string into two halves of equal lengths, and let a be the first half and b be the second half.
// Two strings are alike if they have the same number of vowels('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U').
// Notice that s contains uppercase and lowercase letters.
// Return true if a and b are alike.
// Otherwise, return false.

/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let cnt = [0, 0];
    s.split('').forEach(function (ch, idx) {
        if (vowels.includes(ch)) {
            cnt[((idx < s.length / 2) ? '0' : '1')]++;
        }
    });
    return (cnt[0] == cnt[1]);
};