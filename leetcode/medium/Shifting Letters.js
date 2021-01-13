// We have a string S of lowercase letters, and an integer array shifts.
// Call the shift of a letter, the next letter in the alphabet, (wrapping around so that 'z' becomes 'a').
// For example, shift('a') = 'b', shift('t') = 'u', and shift('z') = 'a'.
// Now for each shifts[i] = x, we want to shift the first i + 1 letters of S, x times.
// Return the final string after all such shifts to S are applied.

/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function (S, shifts) {
    shifts = shifts.map(function (el) { return (el % 26); });
    return S.split('').map(function (ch, ndx) {
        let sum = (ch.charCodeAt(0) - 97 + shifts.reduce((acc, r, rdx) => { return acc + ((rdx >= ndx) ? r : 0); }, 0)) % 26;
        return String.fromCharCode(sum + 97);
    }).join('');
};