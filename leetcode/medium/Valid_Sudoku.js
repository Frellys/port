// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
// - Each row must contain the digits 1-9 without repetition.
// - Each column must contain the digits 1-9 without repetition.
// - Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let ret = true;
    // check rows
    board.forEach(function (row) {
        if (!containsUniqueValues(row)) ret = false;
    });
    if (!ret) return false;
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
        if (!containsUniqueValues(col)) ret = false;
    });
    if (!ret) return false;
    // check boxes
    let boxes = [];
    for (let r = 0; r < 9; r += 3) {
        for (let c = 0; c < 9; c += 3) {
            boxes.push([
                board[r + 0][c + 0], board[r + 0][c + 1], board[r + 0][c + 2],
                board[r + 1][c + 0], board[r + 1][c + 1], board[r + 1][c + 2],
                board[r + 2][c + 0], board[r + 2][c + 1], board[r + 2][c + 2]
            ]);
        }
    }
    boxes.forEach(function (box) {
        if (!containsUniqueValues(box)) ret = false;
    });
    // return if all checks passed
    return ret;
    /**
     * @param {string[]} arr
     * @return {boolean}
     */
    function containsUniqueValues(arr) {
        let els = [];
        let res = true;
        arr.forEach(function (elem) {
            if (elem != '.') {
                if (els.includes(elem)) {
                    res = false;
                }
                else {
                    els.push(elem);
                }
            }
        });
        return res;
    }
};