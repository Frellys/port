// You are given a phone number as a string number.number consists of digits, spaces ' ', and / or dashes '-'.
// You would like to reformat the phone number in a certain manner.
// Firstly, remove all spaces and dashes.Then, group the digits from left to right into blocks of length 3 until there are 4 or fewer digits.
// The final digits are then grouped as follows:
// - 2 digits: A single block of length 2.
// - 3 digits: A single block of length 3.
// - 4 digits: Two blocks of length 2 each.
// The blocks are then joined by dashes.
// Notice that the reformatting process should never produce any blocks of length 1 and produce at most two blocks of length 2.
// Return the phone number after formatting.

/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
    let ret = [];
    let arr = number.replace(/\s/g, '').replace(/-/g, '').split('');
    while (arr.length > 4) {
        let cur = '';
        cur += arr.shift() + arr.shift() + arr.shift();
        ret.push(cur);
    }
    switch (arr.length) {
        case 2:
        case 3: { ret.push(arr.join('')); break; }
        case 4: { ret.push(arr[0] + arr[1] + '-' + arr[2] + arr[3]); break; }
        default: { break; }
    }
    return ret.join('-');
};