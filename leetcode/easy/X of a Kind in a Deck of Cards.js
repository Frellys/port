// In a deck of cards, each card has an integer written on it.
// Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:
// - Each group has exactly X cards.
// - All the cards in each group have the same integer.

/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
    let freq = {};
    deck.forEach(function (el) {
        let key = el.toString();
        freq[key] = (key in freq) ? freq[key] + 1 : 1;
    });
    let vals = Object.values(freq);
    if (vals.some(function (v) { return v < 2; })) return false;
    let min = vals.sort(function (a, b) { return a - b; })[0];
    let ret = false;
    let cur = 2;
    while (cur <= min) {
        if (vals.every(function (v) { return v % cur == 0; })) {
            ret = true
            break;
        }
        cur++;
    }
    return ret;
};