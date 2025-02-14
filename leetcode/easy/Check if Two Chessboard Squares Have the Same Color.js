// You are given two strings, coordinate1 and coordinate2, representing the coordinates of a square on an 8 x 8 chessboard.
// Return true if these two squares have the same color and false otherwise.
// The coordinate will always represent a valid chessboard square.
// The coordinate will always have the letter first (indicating its column), and the number second (indicating its row).

/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function (coordinate1, coordinate2) {
    return new Set(Array.from(arguments).map(el => {
        return el.split('').reduce((acc, cur) => {
            return acc += (parseInt(cur) || cur.charCodeAt(0) - 97);
        }, 0) % 2;
    })).size == 1;
};