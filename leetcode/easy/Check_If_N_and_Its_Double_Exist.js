// Given an array arr of integers, check if there exists two integers N and M such that N is the double of M(i.e.N = 2 * M).

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    let ret = false;
    for (let i = 0; i < arr.length && !ret; i++) {
        for (let j = 0; j < arr.length && !ret; j++) {
            if (i != j && arr[i] == 2 * arr[j]) {
                ret = true;
            }
        }
    }
    return ret;
};