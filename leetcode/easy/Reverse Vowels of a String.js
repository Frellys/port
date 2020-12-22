// Write a function that takes a string as input and reverse only the vowels of a string.

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let vovels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let chars = s.split('');
    let arr = chars.filter(function (ch) { return (vovels.includes(ch)); });
    for (let i = 0; i < chars.length; i++) {
        if (vovels.includes(chars[i])) chars[i] = arr.pop();
    }
    return chars.join('');
};