// On a N * N grid, we place some 1 * 1 * 1 cubes that are axis - aligned with the x, y, and z axes.
// Each value v = grid[i][j] represents a tower of v cubes placed on top of grid cell(i, j).
// Now we view the projection of these cubes onto the xy, yz, and zx planes.
// A projection is like a shadow, that maps our 3 dimensional figure to a 2 dimensional plane.
// Here, we are viewing the "shadow" when looking at the cubes from the top, the front, and the side.
// Return the total area of all three projections.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
    let xy = 0;
    let xz = 0;
    let yz = 0;
    grid.forEach(function (row, rdx) {
        row.forEach(function (cell, cdx) {
            if (cell != 0) xy++;
            if (rdx == 0) {
                let colmax = cell;
                for (let i = 1; i < grid.length; i++) {
                    if (colmax < grid[i][cdx]) colmax = grid[i][cdx];
                }
                xz += colmax;
            }
        });
        yz += Math.max.apply(null, row);
    });
    return (xy + xz + yz)
};