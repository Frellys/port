// Given a 2D integer matrix M representing the gray scale of an image,
// you need to design a smoother to make the gray scale of each cell becomes the average gray scale(rounding down) of all the 8 surrounding cells and itself.
// If a cell has less than 8 surrounding cells, then use as many as you can.

/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {
    let ret = [];
    let rows = M.length;
    let cols = M[0].length;
    M.forEach(function (row, rdx) {
        let tmp_row = [];
        row.forEach(function (cell, cdx) {
            let sum = cell;
            let cnt = 1;
            [
                { r: rdx - 1, c: cdx - 1 },
                { r: rdx - 1, c: cdx },
                { r: rdx - 1, c: cdx + 1 },
                { r: rdx, c: cdx + 1 },
                { r: rdx + 1, c: cdx + 1 },
                { r: rdx + 1, c: cdx },
                { r: rdx + 1, c: cdx - 1 },
                { r: rdx, c: cdx - 1 }
            ].forEach(function (el) {
                if (el.r >= 0 && el.r < rows && el.c >= 0 && el.c < cols) {
                    sum += M[el.r][el.c];
                    cnt++;
                }
            });
            tmp_row.push(Math.floor(sum / cnt));
        });
        ret.push(tmp_row);
    });
    return ret;
};