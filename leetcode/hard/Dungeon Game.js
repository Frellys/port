// The demons had captured the princess and imprisoned her in the bottom - right corner of a dungeon.
// The dungeon consists of m x n rooms laid out in a 2D grid.
// Our valiant knight was initially positioned in the top - left room and must fight his way through dungeon to rescue the princess.
// The knight has an initial health point represented by a positive integer.
// If at any point his health point drops to 0 or below, he dies immediately.
// Some of the rooms are guarded by demons(represented by negative integers), so the knight loses health upon entering these rooms;
// other rooms are either empty(represented as 0) or contain magic orbs that increase the knight's health (represented by positive integers).
// To reach the princess as quickly as possible, the knight decides to move only rightward or downward in each step.
// Return the knight's minimum initial health so that he can rescue the princess.
// Note that any room can contain threats or power - ups, even the first room the knight enters and the bottom - right room where the princess is imprisoned.

/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
    let h = dungeon.length;
    let w = dungeon[0].length;
    let t = Array.from(new Array(h + 1), () => new Array(w + 1).fill(Number.MAX_SAFE_INTEGER));
    t[h][w - 1] = 1;
    for (let r = h - 1; r > -1; r--) {
        for (let c = w - 1; c > -1; c--) {
            t[r][c] = Math.max(1, Math.min(t[r + 1][c], t[r][c + 1]) - dungeon[r][c]);
        }
    }
    return t[0][0];
};