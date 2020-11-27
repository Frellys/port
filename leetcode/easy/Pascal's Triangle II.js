// Given an integer rowIndex, return the rowIndexth row of the Pascal's triangle.

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let triangle = [];
    triangle.push([1]);
    triangle.push([1, 1]);
    for (let i = 2; i < rowIndex + 1; i++) {
        let row = [];
        row.push(1);
        for (let j = 0; j < i - 1; j++) {
            row.push(triangle[triangle.length - 1][j] + triangle[triangle.length - 1][j + 1]);
        }
        row.push(1);
        triangle.push(row);
    }
    return triangle[rowIndex];
};