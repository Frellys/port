// Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list(including duplicates).
// For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.
// You may return the answer in any order.

/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
    let ret = [];
    if (A.length == 1) {
        ret = A[0].split('');
    }
    else {
        for (let i = 1; i < A.length; i++) {
            A[i] = A[i].split('');
        }
        A[0].split('').forEach(function (ch) {
            let flag = true;
            for (let i = 1; i < A.length; i++) {
                if (!A[i].includes(ch)) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                ret.push(ch);
                for (let i = 1; i < A.length; i++) {
                    A[i].splice(A[i].indexOf(ch), 1);
                }
            }
        });
    }
    return ret;
};