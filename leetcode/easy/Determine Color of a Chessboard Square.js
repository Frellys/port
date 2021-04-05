// You are given coordinates, a string that represents the coordinates of a square of the chessboard.Below is a chessboard for your reference.
// Return true if the square is white, and false if the square is black.
// The coordinate will always represent a valid chessboard square.
// The coordinate will always have the letter first, and the number second.

/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
    let [a, b] = coordinates.split('');
    a = '0abcdefgh'.indexOf(a) + 1;
    b = parseInt(b);
    return (a + b) % 2 == 0;
};