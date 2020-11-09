// Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.
// We repeatedly make duplicate removals on S until we no longer can.
// Return the final string after all such duplicate removals have been made.
// It is guaranteed the answer is unique.

/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
    let arr = S.split('');
    while (true) {
        let containsDuplicates = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] == arr[i + 1]) {
                containsDuplicates = true;
                arr.splice(i, 2);
                break;
            }
        }
        if (!containsDuplicates) break;
    }
    return arr.join('');
};