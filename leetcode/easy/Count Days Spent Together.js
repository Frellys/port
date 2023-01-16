// Alice and Bob are traveling to Rome for separate business meetings.
// You are given 4 strings arriveAlice, leaveAlice, arriveBob, and leaveBob.
// Alice will be in the city from the dates arriveAlice to leaveAlice (inclusive),
// while Bob will be in the city from the dates arriveBob to leaveBob (inclusive).
// Each will be a 5-character string in the format "MM-DD", corresponding to the month and day of the date.
// Return the total number of days that Alice and Bob are in Rome together.
// You can assume that all dates occur in the same calendar year,
// which is not a leap year. Note that the number of days per month can be represented as: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31].

/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function (arriveAlice, leaveAlice, arriveBob, leaveBob) {
    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let getDay = function (str) {
        let [d, m] = str.split('-').reverse().map((el, edx) => parseInt(el) - edx);
        for (let i = 0; i < m; i++) {
            d += months[i];
        }
        return d;
    };
    let a = {
        arrive: getDay(arriveAlice),
        leave: getDay(leaveAlice)
    };
    let b = {
        arrive: getDay(arriveBob),
        leave: getDay(leaveBob)
    };
    let ret = 0;
    for (let i = a.arrive; i <= a.leave; i++) {
        ret += ((i >= b.arrive) && (i <= b.leave));
    }
    return ret;
};