// Your friend is typing his name into a keyboard.Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.
// You examine the typed characters of the keyboard.Return True if it is possible that it was your friends name, with some characters(possibly none) being long pressed.

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
    let arr = [{ 'char': name[0], 'cnt': 0 }];
    let inp = [{ 'char': typed[0], 'cnt': 0 }];
    name.split('').forEach(function (ch) {
        if (arr[arr.length - 1]['char'] == ch) {
            arr[arr.length - 1]['cnt']++;
        }
        else {
            arr.push({ 'char': ch, 'cnt': 1 });
        }
    });
    typed.split('').forEach(function (ch) {
        if (inp[inp.length - 1]['char'] == ch) {
            inp[inp.length - 1]['cnt']++;
        }
        else {
            inp.push({ 'char': ch, 'cnt': 1 });
        }
    });
    return (inp.length == arr.length) && inp.every(function (el, idx) { return arr[idx] && el['char'] == arr[idx]['char'] && inp[idx]['cnt'] >= arr[idx]['cnt']; });
};