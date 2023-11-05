// A truck has two fuel tanks. You are given two integers,
// mainTank representing the fuel present in the main tank in liters
// and additionalTank representing the fuel present in the additional tank in liters.
// The truck has a mileage of 10 km per liter.
// Whenever 5 liters of fuel get used up in the main tank, if the additional tank has at least 1 liters of fuel,
// 1 liters of fuel will be transferred from the additional tank to the main tank.
// Return the maximum distance which can be traveled.

/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function (mainTank, additionalTank) {
    let ret = 0;
    let used = 0;
    while (mainTank--) {
        if (++used == 5) {
            used = 0;
            if (additionalTank) {
                additionalTank--;
                mainTank++;
            }
        }
        ret += 10;
    }
    return ret;
};