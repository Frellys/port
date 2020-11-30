// Given a non - negative integer numRows, generate the first numRows of Pascal's triangle.

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let res = [];
    for (let i = 0; i < numRows; i++) {
        switch (i) {
            case 0: {
                res.push([1]);
                break;
            }
            case 1: {
                res.push([1,1]);
                break;
            }
            default: {
                let arr = [];
                arr.push(1);
                for (let r = 1; r < i; r++) {
                    arr.push(res[i - 1][r - 1] + res[i - 1][r]);
                }
                arr.push(1);
                res.push(arr);
                break;
            }
        }
    }
    return res;
};