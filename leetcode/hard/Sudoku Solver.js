// Write a program to solve a Sudoku puzzle by filling the empty cells.
// A sudoku solution must satisfy all of the following rules:
// - Each of the digits 1-9 must occur exactly once in each row.
// - Each of the digits 1-9 must occur exactly once in each column.
// - Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub - boxes of the grid.
// The '.' character indicates empty cells.


/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    let board = [
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ];
    board.forEach(function (row, rdx) {
        row.forEach(function (col, cdx) {
            if (col === '.') board[rdx][cdx] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
        });
    });
    let cnt = 0;
    while (true) {
        cnt++;
        if (cnt == 10) break;
        for (let r = 0; r < 9; r++) {
            let rowValues = [];
            let colValues = [];
            for (let c = 0; c < 9; c++) {
                if (typeof board[r][c] == 'object' && board[r][c].length == 1) board[r][c] = board[r][c].pop();
                if (typeof board[c][r] == 'object' && board[c][r].length == 1) board[c][r] = board[c][r].pop();
                if (typeof board[r][c] == 'string') rowValues.push(board[r][c]);
                if (typeof board[c][r] == 'string') colValues.push(board[c][r]);
            }
            for (let c = 0; c < 9; c++) {
                if (typeof board[r][c] == 'object') board[r][c] = board[r][c].filter(function (v) { return (rowValues.includes(v) == false); });
                if (typeof board[c][r] == 'object') board[c][r] = board[c][r].filter(function (v) { return (rowValues.includes(v) == false); });
            }
            if (r % 3 == 0) {
                for (let c = 0; c < 9; c += 3) {
                    let boxIdx = [
                        [r + 0, c + 0], [r + 0, c + 1], [r + 0, c + 2],
                        [r + 1, c + 0], [r + 1, c + 1], [r + 1, c + 2],
                        [r + 2, c + 0], [r + 2, c + 1], [r + 2, c + 2]
                    ];
                    let box = boxIdx.map(function (p) { return board[p[0]][p[1]]; });
                    //console.log(box);
                    let boxValues = boxIdx.filter(function (el) { return (typeof el == 'string'); });
                    boxIdx.forEach(function (p) {
                        let cell = board[p[0]][p[1]];
                        if (typeof cell == 'object') board[p[0]][p[1]] = cell.filter(function (v) { return (boxValues.includes(v) == false); });
                    });
                }
            }
        }
    };
    console.log(board);
};