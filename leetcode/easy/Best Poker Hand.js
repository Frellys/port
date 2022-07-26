// You are given an integer array ranks and a character array suits.
// You have 5 cards where the ith card has a rank of ranks[i] and a suit of suits[i].
// The following are the types of poker hands you can make from best to worst:
// - "Flush": Five cards of the same suit.
// - "Three of a Kind": Three cards of the same rank.
// - "Pair": Two cards of the same rank.
// - "High Card": Any single card.
// Return a string representing the best type of poker hand you can make with the given cards.

/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function (ranks, suits) {
    let tests = [
        (r, s) => {
            if (new Set(s).size == 1) {
                return 'Flush';
            }
        },
        (r, s) => {
            let seen = {};
            r.forEach((k) => {
                if (!(k in seen)) {
                    seen[k] = 0;
                }
                seen[k]++;
            });
            if (Object.values(seen).some(v => v >= 3)) {
                return 'Three of a Kind';
            }
        },
        (r, s) => {
            if (new Set(r).size < 5) {
                return 'Pair';
            }
        },
        (r, s) => {
            return 'High Card';
        }
    ];
    return tests.reduce((acc, cur) => {
        return acc || cur(ranks, suits);
    }, undefined);
};