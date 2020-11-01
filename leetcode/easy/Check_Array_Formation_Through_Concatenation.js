// You are given an array of distinct integers arr and an array of integer arrays pieces, where the integers in pieces are distinct.
// Your goal is to form arr by concatenating the arrays in pieces in any order.However, you are not allowed to reorder the integers in each array pieces[i].
// Return true if it is possible to form the array arr from pieces.Otherwise, return false.

/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
    if (arr.flat().length != pieces.flat().length) return false;
    for (let i = 0; i < pieces.length; i++) {
        if (!arr.includes(pieces[i][0])) return false;
        if (pieces[i].length != 1) {
            let pos = arr.indexOf(pieces[i][0]);
            for (let j = 0; j < pieces[i].length; j++) {
                if (arr.indexOf(pieces[i][j]) != pos) return false;
                pos++;
            }
        }
    }
    return true;
};