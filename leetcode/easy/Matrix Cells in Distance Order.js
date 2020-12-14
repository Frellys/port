// We are given a matrix with R rows and C columns has cells with integer coordinates(r, c), where 0 <= r < R and 0 <= c < C.
// Additionally, we are given a cell in that matrix with coordinates(r0, c0).
// Return the coordinates of all cells in the matrix, sorted by their distance from(r0, c0) from smallest distance to largest distance.
// Here, the distance between two cells(r1, c1) and(r2, c2) is the Manhattan distance, | r1 - r2 | + | c1 - c2 |.
// (You may return the answer in any order that satisfies this condition.)

/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function (R, C, r0, c0) {
    let ret = [];
    for (let row = 0; row < R; row++) {
        for (let col = 0; col < C; col++) {
            let p = [row, col];
            console.log(p);
            let d = Math.abs(row - r0) + Math.abs(col - c0);
            if (!ret[d]) ret[d] = [];
            ret[d].push(p);
        }
    }
    return ret.reduce(function (acc, el) { return acc.concat(el); });
};