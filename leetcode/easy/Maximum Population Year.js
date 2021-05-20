// You are given a 2D integer array logs where each logs[i] = [birthi, deathi] indicates the birth and death years of the ith person.
// The population of some year x is the number of people alive during that year.
// The ith person is counted in year x's population if x is in the inclusive range [birthi, deathi - 1].
// Note that the person is not counted in the year that they die.
// Return the earliest year with the maximum population.

/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function (logs) {
    let max = 0;
    let population = {};
    for (let year = 1950; year < 2051; year++) {
        population[year.toString()] = 0;
    }
    logs.forEach(function (log) {
        for (let idx = log[0]; idx < log[1]; idx++) {
            let year = idx.toString();
            population[year]++;
            if (max < population[year]) {
                max = population[year];
            }
        }
    });
    return Math.min.apply(null, Object.keys(population).filter(function (year) { return population[year] == max; }).map(function (year) { return Number(year); }));
};