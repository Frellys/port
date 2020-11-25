// Given a list of sorted characters letters containing only lowercase letters, and given a target letter target, find the smallest element in the list that is larger than the given target.

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    let ret;
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] > target) {
            ret = letters[i];
            break;
        }
    }
    return (ret == undefined) ? letters[0] : ret;
};