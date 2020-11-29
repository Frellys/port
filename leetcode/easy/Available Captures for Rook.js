// On an 8 x 8 chessboard, there is one white rook.
// There also may be empty squares, white bishops, and black pawns.These are given as characters 'R', '.', 'B', and 'p' respectively.
// Uppercase characters represent white pieces, and lowercase characters represent black pieces.
// The rook moves as in the rules of Chess: it chooses one of four cardinal directions(north, east, west, and south),
// then moves in that direction until it chooses to stop, reaches the edge of the board,
// or captures an opposite colored pawn by moving to the same square it occupies.
// Also, rooks cannot move into the same square as other friendly bishops.
// Return the number of pawns the rook can capture in one move.

/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
    let ret = 0;
    let posX;
    let posY;
    board.forEach(function (row, rdx) {
        row.forEach(function (cell, cdx) {
            if (cell == 'R') {
                posX = cdx;
                posY = rdx;
            }
        });
    });
    for (let r = posY; r >= 0; r--) {
        if (board[r][posX] == 'p') { ret++; break; }
        if (board[r][posX] == 'B') { break; }
    }
    for (let r = posY; r <= 7; r++) {
        if (board[r][posX] == 'p') { ret++; break; }
        if (board[r][posX] == 'B') { break; }
    }
    for (let c = posX; c >= 0; c--) {
        if (board[posY][c] == 'p') { ret++; break; }
        if (board[posY][c] == 'B') { break; }
    }
    for (let c = posX; c <= 7; c++) {
        if (board[posY][c] == 'p') { ret++; break; }
        if (board[posY][c] == 'B') { break; }
    }
    return ret;
};