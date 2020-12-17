// Given an m x n board and a word, find if the word exists in the grid.
// The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are horizontally or vertically neighboring.
// The same letter cell may not be used more than once.

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let flag = false;
    let cur = [];
    function traverse(r, c) {
        if (!flag && board[r] && board[r][c]) {
            if (board[r][c] == word[cur.length]) {
                let coords = [r, c].join(',');
                if (!cur.includes(coords)) {
                    if ((cur.length + 1) == word.length) {
                        flag = true;
                    }
                    else {
                        cur.push(coords);
                        traverse((r - 1), c);
                        traverse((r + 1), c);
                        traverse(r, (c - 1));
                        traverse(r, (c + 1));
                        cur.pop();
                    }
                }
            }
        }
    };
    board.forEach(function (row, rdx) {
        row.forEach(function (col, cdx) {
            if (!flag && col == word[0]) {
                traverse(rdx, cdx);
            }
        });
    });
    return flag;
};