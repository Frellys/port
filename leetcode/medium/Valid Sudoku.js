// Determine if a 9 x 9 Sudoku board is valid.
// Only the filled cells need to be validated according to the following rules:
// - Each row must contain the digits 1-9 without repetition.
// - Each column must contain the digits 1-9 without repetition.
// - Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let containsUniqueValues = function (arr) {
        let vals = arr.filter(el => el != '.');
        return vals.length == new Set(vals).size;
    };
    let cols = new Array(board.length).fill(false).map((r, rdx) => {
        return new Array(board.length).fill(false).map((c, cdx) => board[cdx][rdx]);
    });
    let boxes = new Array(board.length).fill(false).map((b, bdx) => {
        let r = parseInt(bdx / 3) * 3;
        let c = bdx % 3 * 3;
        return new Array(9).fill(false).map((el, edx) => {
            let rx = r + parseInt(edx / 3);
            let cx = c + (edx % 3);
            return board[rx][cx];
        });
    });
    return [board, cols, boxes].every(el => el.every(containsUniqueValues));
};