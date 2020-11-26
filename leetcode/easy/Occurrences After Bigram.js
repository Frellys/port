// Given words first and second, consider occurrences in some text of the form "first second third",
// where second comes immediately after first, and third comes immediately after second.
// For each such occurrence, add "third" to the answer, and return the answer.

/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
    let ret = [];
    let words = text.split(' ');
    for (let i = 0; i < words.length - 2; i++) {
        if (words[i] == first && words[i + 1] == second) ret.push(words[i + 2]);
    }
    return ret;
};