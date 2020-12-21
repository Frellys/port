// We have an array arr of non - negative integers.
// For every(contiguous) subarray sub = [arr[i], arr[i + 1], ..., arr[j]](with i <= j),
// we take the bitwise OR of all the elements in sub, obtaining a result arr[i] | arr[i + 1] | ... | arr[j].
// Return the number of possible results.
// Results that occur more than once are only counted once in the final answer

/**
 * @param {number[]} arr
 * @return {number}
 */
var subarrayBitwiseORs = function (arr) {
    let ret = [];
    let cnt = 0;
    let len = arr.length
    for (let i = 0; i < len; i++) {
        let tmp = ret.length;
        ret.push(arr[i]);
        while (cnt < tmp) {
            let cur = ret[cnt] | arr[i];
            if (cur !== ret[ret.length - 1]) ret.push(cur);
            cnt++;
        }
    }
    return new Set(ret).size;
};