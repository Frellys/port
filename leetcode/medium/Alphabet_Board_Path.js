// On an alphabet board, we start at position(0, 0), corresponding to character board[0][0].
// Here, board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"], as shown in the diagram below.
// We may make the following moves:
// - 'U' moves our position up one row, if the position exists on the board;
// - 'D' moves our position down one row, if the position exists on the board;
// - 'L' moves our position left one column, if the position exists on the board;
// - 'R' moves our position right one column, if the position exists on the board;
// - '!' adds the character board[r][c] at our current position(r, c) to the answer.
// (Here, the only positions that exist on the board are positions with letters on them.)
// Return a sequence of moves that makes our answer equal to target in the minimum number of moves.You may return any path that does so.

/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function (target) {
    let board = [
        'abcde',
        'fghij',
        'klmno',
        'pqrst',
        'uvwxy',
        'z'
    ];
    let pos = {
        x: 0,
        y: 0
    };
    let ret = '';
    target.split('').forEach(function (ch) {
        let charpos = {
            x: 0,
            y: 0
        };
        board.forEach(function (row, rdx) {
            if (row.indexOf(ch) != -1) {
                charpos.x = row.indexOf(ch);
                charpos.y = rdx;
            }
        });
        if (pos.y == 5) {
            while (pos.y != charpos.y) { pos.y--; ret += 'U'; }
            while (pos.x != charpos.x) { pos.x++; ret += 'R'; }
            ret += '!';
        }
        else {
            while (pos.x != charpos.x) {
                if (pos.x > charpos.x) {
                    pos.x--;
                    ret += 'L';
                }
                else {
                    pos.x++;
                    ret += 'R';
                }
            }
            while (pos.y != charpos.y) {
                if (pos.y > charpos.y) {
                    pos.y--;
                    ret += 'U';
                }
                else {
                    pos.y++;
                    ret += 'D';
                }
            }
            ret += '!';
        }
    });
    return ret;
};