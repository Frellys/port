// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
// - Each row must contain the digits 1-9 without repetition.
// - Each column must contain the digits 1-9 without repetition.
// - Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    // check rows
    board.forEach(function (row) {
        if (!containsUniqueValues(row)) return false;
    });
    // check cols
    let cols = [];
    for (let r = 0; r < board.length; r++) {
        let curCol = [];
        for (let c = 0; c < board[r].length; c++) {
            curCol.push(board[c][r]);
        }
        cols.push(curCol);
    }
    cols.forEach(function (col) {
        if (!containsUniqueValues(col)) return false;
    });
    return true;
    /**
     * @param {string[]} arr
     * @return {boolean}
     */
    function containsUniqueValues(arr) {
        let els = [];
        arr.forEach(function (elem) {
            if (elem != '') {
                if (els.includes(elem)) {
                    return false;
                }
                else {
                    els.push(elem);
                }
            }
        });
        return true;
    }
};