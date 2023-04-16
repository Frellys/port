// There exists an infinitely large two-dimensional grid of uncolored unit cells.
// You are given a positive integer n, indicating that you must do the following routine for n minutes:
// - At the first minute, color any arbitrary unit cell blue.
// - Every minute thereafter, color blue every uncolored cell that touches a blue cell.

/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function (n) {
    let ret = 1;
    for (let i = 1; i < n; ret += (4 * i++)) { }
    return ret;
};