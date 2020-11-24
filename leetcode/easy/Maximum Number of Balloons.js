// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once.Return the maximum number of instances that can be formed.

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
    let arr = text.split('');
    let flag = true;
    let ret = 0;
    while (flag) {
        'balloon'.split('').forEach(function (ch) {
            if (flag) {
                if (arr.includes(ch)) {
                    arr.splice(arr.indexOf(ch), 1);
                }
                else {
                    flag = false;
                }
            }
        });
        if (flag) ret++;
    }
    return ret;
};