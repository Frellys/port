// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:
// "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.
// Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter.
// For example, "cab" can be written as "-.-..--...", (which is the concatenation "-.-." + ".-" + "-...").
// We'll call such a concatenation, the transformation of a word.
// Return the number of different transformations among all words we have.

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
    let morse = {
        'a': '.-',
        'b': '-...',
        'c': '-.-.',
        'd': '-..',
        'e': '.',
        'f': '..-.',
        'g': '--.',
        'h': '....',
        'i': '..',
        'j': '.---',
        'k': '-.-',
        'l': '.-..',
        'm': '--',
        'n': '-.',
        'o': '---',
        'p': '.--.',
        'q': '--.-',
        'r': '.-.',
        's': '...',
        't': '-',
        'u': '..-',
        'v': '...-',
        'w': '.--',
        'x': '-..-',
        'y': '-.--',
        'z': '--..'
    };
    let ret = [];
    words.forEach(function (word) {
        let cur = '';
        word.split('').forEach(function (ch) {
            cur += morse[ch];
        });
        if (!ret.includes(cur)) ret.push(cur);
    });
    return ret.length;
};