// S and T are strings composed of lowercase letters.
// In S, no letter occurs more than once.
// S was sorted in some custom order previously.We want to permute the characters of T so that they match the order that S was sorted.
// More specifically, if x occurs before y in S, then x should occur before y in the returned string.
// Return any permutation of T(as a string) that satisfies this property.

/**
 * @param {string} order
 * @param {string} str
 * @return {string}
 */
var customSortString = function (order, str) {
    let arr = str.split('');
    let len = str.length;
    let ret = '';
    let diff = 0;
    for (let ch of order) {
        diff = len - (arr = arr.filter(el => el !== ch)).length;
        len -= diff;
        while (diff) {
            ret += ch;
            diff--;
        }
    }
    return (ret + arr.join(''));
};