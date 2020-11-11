// Given a string array words, find the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters.
// You may assume that each word will contain only lower case letters.If no such two words exist, return 0.

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
    let lens = [];
    words.forEach(function (el, idx, arr) {
        lens.push(el.length);
        arr[idx] = Array.from(new Set(el.split('')));
    });
    let max = 0;
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            let flag = true;
            words[i].forEach(function (ch) {
                if (flag && words[j].includes(ch)) flag = false;
            });
            if (flag) {
                let product = lens[i] * lens[j];
                if (max < product) max = product;
            }
        }
    }
    console.log(max);
    return max;
};