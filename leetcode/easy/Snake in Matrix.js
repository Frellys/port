// There is a snake in an n x n matrix grid and can move in four possible directions.
// Each cell in the grid is identified by the position: grid[i][j] = (i * n) + j.
// The snake starts at cell 0 and follows a sequence of commands.
// You are given an integer n representing the size of the grid and an array of strings commands where each command[i] is either "UP", "RIGHT", "DOWN", and "LEFT".
// It's guaranteed that the snake will remain within the grid boundaries throughout its movement.
// Return the position of the final cell where the snake ends up after executing commands.

/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function (n, commands) {
    let pos = commands.reduce((acc, cur) => {
        if (cur == 'UP') {
            acc.r--;
        }
        if (cur == 'DOWN') {
            acc.r++;
        }
        if (cur == 'LEFT') {
            acc.c--;
        }
        if (cur == 'RIGHT') {
            acc.c++;
        }
        return acc;
    }, { r: 0, c: 0 });
    return pos.r * n + pos.c;
};