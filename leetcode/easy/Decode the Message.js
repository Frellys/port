// You are given the strings key and message, which represent a cipher key and a secret message, respectively.
// The steps to decode message are as follows:
// - Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
// - Align the substitution table with the regular English alphabet.
// - Each letter in message is then substituted using the table.
// - Spaces ' ' are transformed to themselves.
// Return the decoded message.

/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
    let cipher = Array.from(new Set(key.split('').filter(c => c != ' '))).reduce((acc, cur, cdx) => {
        acc[cur] = String.fromCharCode(97 + cdx);
        return acc;
    }, {})
    return message.split('').map(c => cipher[c] || c).join('');
};