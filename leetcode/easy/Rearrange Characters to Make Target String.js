// You are given two 0-indexed strings s and target.
// You can take some letters from s and rearrange them to form new strings.
// Return the maximum number of copies of target that can be formed by taking letters from s and rearranging them.

/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (s, target) {
    const seen = {};
    const orig = target.split('').reduce((acc, cur) => {
        if (!(cur in seen)) {
            seen[cur] = 0;
        }
        if (!(cur in acc)) {
            acc[cur] = 0;
        }
        acc[cur]++;
        return acc;
    }, {});
    for (let c of s) {
        seen[c]++;
    }
    return Object.keys(orig).reduce((acc, cur) => {
        const tmp = Math.floor(seen[cur] / orig[cur]);
        return Math.min(tmp, acc);
    }, Number.MAX_SAFE_INTEGER);
};