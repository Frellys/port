// You are given a string s, return the number of segments in the string.
// A segment is defined to be a contiguous sequence of non - space characters.

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
    if (s == '') return 0;
    let ret = [];
    ret = s.split(' ');
    for (let i = 0; i < ret.length; i++) {
        if (ret[i] == '') {
            ret.splice(i, 1);
            i--;
        }
    }
    return ret;
};