// Write a program to solve a Sudoku puzzle by filling the empty cells.
// A sudoku solution must satisfy all of the following rules:
// - Each of the digits 1 - 9 must occur exactly once in each row.
// - Each of the digits 1 - 9 must occur exactly once in each column.
// - Each of the digits 1 - 9 must occur exactly once in each of the 9 3x3 sub - boxes of the grid.
// The '.' character indicates empty cells.

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    let board = [
        [".", ".", "9", "7", "4", "8", ".", ".", "."],
        ["7", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", "2", ".", "1", ".", "9", ".", ".", "."],
        [".", ".", "7", ".", ".", ".", "2", "4", "."],
        [".", "6", "4", ".", "1", ".", "5", "9", "."],
        [".", "9", "8", ".", ".", ".", "3", ".", "."],
        [".", ".", ".", "8", ".", "3", ".", "2", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "6"],
        [".", ".", ".", "2", "7", "5", "9", ".", "."]
    ];
    let nums = {
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0
    };
    function boardContainsEmpty() {
        let flag = false;
        Object.keys(nums).forEach(function (key) {
            if (nums[key] != 9) flag = true;
        });
        return flag;
    }
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] == '.') {
                board[r][c] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
            }
            else {
                nums[(board[r][c])]++;
            }
        }
    }
    function crossOut(direction, index, value) {
        if (nums[value] != 9) {
            if (direction == 'row') {
                for (let col = 0; col < 9; col++) {
                    if (typeof board[index][col] == 'object' && ~(board[index][col]).indexOf(value)) {
                        (board[index][col]).splice((board[index][col]).indexOf(value), 1);
                        if ((board[index][col]).length == 1) {
                            (board[index][col]) = (board[index][col])[0];
                            crossOut('row', index, (board[index][col]));
                            crossOut('col', col, (board[index][col]));
                            nums[(board[index][col])]++;
                        }
                    }
                }
            }
            else {
                for (let row = 0; row < 9; row++) {
                    if (typeof board[row][index] == 'object' && ~(board[row][index]).indexOf(value)) {
                        (board[row][index]).splice((board[row][index]).indexOf(value), 1);
                        if ((board[row][index]).length == 1) {
                            (board[row][index]) = (board[row][index])[0];
                            crossOut('row', row, (board[row][index]));
                            crossOut('col', index, (board[row][index]));
                            nums[(board[row][index])]++;
                        }
                    }
                }
            }
        }
    }
    function check_subBoxes() {
        let tldx = [
            [0, 0], [0, 3], [0, 6],
            [3, 0], [3, 6], [3, 6],
            [6, 0], [6, 6], [6, 6]
        ];
        tldx.forEach(function (tl, tdx) {
            let boxNums = [];
            for (let r = tl[0]; r < (tl[0] + 3); r++) {
                for (let c = tl[1]; c < (tl[1] + 3); c++) {
                    if (typeof board[r][c] == 'string') {
                        boxNums.push(board[r][c]);
                    }
                }
            }
            for (let r = tl[0]; r < (tl[0] + 3); r++) {
                for (let c = tl[1]; c < (tl[1] + 3); c++) {
                    if (typeof board[r][c] == 'object') {
                        for (let b = 0; b < boxNums.length; b++) {
                            if (~(board[r][c]).indexOf(boxNums[b])) {
                                (board[r][c]).splice((board[r][c]).indexOf(boxNums[b]), 1);
                                if ((board[r][c]).length == 1) {
                                    (board[r][c]) = (board[r][c])[0];
                                    crossOut('row', r, board[r][c]);
                                    crossOut('col', c, board[r][c]);
                                    nums[(board[r][c])]++;
                                }
                            }
                        }
                    }
                }
            }
        });
    }
    let cnt = 5;
    while (cnt > 0 && boardContainsEmpty()) {
        cnt--;
        check_subBoxes();
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (typeof board[r][c] == 'string') {
                    crossOut('row', r, board[r][c]);
                    crossOut('col', c, board[r][c]);
                }
            }
        }
        console.log(board);
    }
};