// Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return compute the researcher's h-index.
// According to the definition of h-index on Wikipedia:
// A scientist has an index h if h of their n papers have at least h citations each, and the other n − h papers have no more than h citations each.
// If there are several possible values for h, the maximum one is taken as the h-index.

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    let ret = 0;
    citations.sort((a, b) => a - b);
    for (let i = 0; i < citations.length; i++) {
        let cur = citations.length - i;
        if (cur <= citations[i]) {
            ret = cur;
            break;
        }
    }
    return ret;
};