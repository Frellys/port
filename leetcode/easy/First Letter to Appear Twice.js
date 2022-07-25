// Given a string s consisting of lowercase English letters, return the first letter to appear twice.

/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
    let seen = {};
    return s.split('').find((c) => {
        if (!(c in seen)) {
            seen[c] = 0;
        }
        seen[c]++;
        return seen[c] == 2;
    });
};