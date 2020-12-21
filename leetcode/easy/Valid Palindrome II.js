// Given a non - empty string s, you may delete at most one character.Judge whether you can make it a palindrome.

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    function remove_character(str, char_pos) {
        part1 = str.substring(0, char_pos);
        part2 = str.substring(char_pos + 1, str.length);
        return (part1 + part2);
    }
    function isPalindrome(str) {
        let flag = true;
        let len = Math.floor(str.length / 2);
        for (let i = 0; i < len; i++) {
            if (str[i] != str[str.length - (i + 1)]) {
                flag = false;
                break;
            }
        }
        return flag;
    }
    let ret = true;
    if (isPalindrome(s) == false) {
        let border = Math.floor(s.length / 2);
        for (let i = 0; i < border; i++) {
            if (s[i] != s[s.length - (i + 1)]) {
                let s1 = remove_character(s, i);
                let s2 = remove_character(s, s.length - (i + 1));
                ret = (isPalindrome(s1) || isPalindrome(s2));
                break;
            }
        }
    }
    return ret;
};