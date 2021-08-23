// There is a special typewriter with lowercase English letters 'a' to 'z' arranged in a circle with a pointer.
// A character can only be typed if the pointer is pointing to that character.
// The pointer is initially pointing to the character 'a'.
// Each second, you may perform one of the following operations:
// - Move the pointer one character counterclockwise or clockwise.
// - Type the character the pointer is currently on.
// Given a string word, return the minimum number of seconds to type out the characters in word.

/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function (word) {
    let ptr = new Map('abcdefghijklmnopqrstuvwxyz'.split('').map((ch, cdx) => [ch, cdx]));
    let pdx = 0;
    return word.split('').reduce(function (acc, cur) {
        let cdx = ptr.get(cur);
        let a = Math.abs(pdx - cdx);
        let b = 26 - a;
        pdx = cdx;
        return acc + Math.min(a, b) + 1;
    }, 0);
};