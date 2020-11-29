// Count the number of prime numbers less than a non - negative number, n.

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    let ret = 0;
    function isPrime(num) {
        let limit = Math.sqrt(num);
        for (let i = 2; i <= limit; i++) {
            if (num % i == 0) return false;
        }
        return num > 1;
    }
    for (let i = 1; i < n; i++) {
        if (isPrime(i)) ret++;
    }
    return ret;
};