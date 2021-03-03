// The count - and - say sequence is a sequence of digit strings defined by the recursive formula:
// - countAndSay(1) = "1"
// - countAndSay(n) is the way you would "say" the digit string from countAndSay(n - 1),
// which is then converted into a different digit string.
// To determine how you "say" a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character.
// Then for each group, say the number of characters, then say the character.
// To convert the saying into a digit string, replace the counts with a number and concatenate every saying.

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    function say(num) {
        let result = ''
        let cur = num[0];
        let cnt = 0;
        for (let c of num) {
            if (c != cur) {
                result += cnt;
                result += cur;
                cnt = 1;
                cur = c;
            }
            else {
                cnt++;
            }
        }
        result += cnt;
        result += cur;
        return result;
    };
    let ret = '1';
    for (let i = 1; i < n; i++) {
        ret = say(ret);
    }
    return ret;
};