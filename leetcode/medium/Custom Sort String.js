// S and T are strings composed of lowercase letters.
// In S, no letter occurs more than once.
// S was sorted in some custom order previously.We want to permute the characters of T so that they match the order that S was sorted.
// More specifically, if x occurs before y in S, then x should occur before y in the returned string.
// Return any permutation of T(as a string) that satisfies this property.

/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function (S, T) {
    let order = Array.from(new Set(S.split('')));
    let ret = '';
    let arr = T.split('');
    order.forEach(function (ch) {
        let cnt = arr.filter(function (el) { return el == ch; }).length;
        while (cnt) {
            ret += ch;
            cnt--;
        }
    });
    ret += arr.filter(function (el) { return order.includes(el) == false; }).join('');
    return ret;
};