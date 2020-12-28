// In a deck of cards, every card has a unique integer.You can order the deck in any order you want.
// Initially, all the cards start face down(unrevealed) in one deck.
// Now, you do the following steps repeatedly, until all cards are revealed:
// - Take the top card of the deck, reveal it, and take it out of the deck.
// - If there are still cards in the deck, put the next top card of the deck at the bottom of the deck.
// - If there are still unrevealed cards, go back to step 1.  Otherwise, stop.
// Return an ordering of the deck that would reveal the cards in increasing order.
// The first entry in the answer is considered to be the top of the deck.

/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
    deck.sort(function (a, b) { return (a - b); });
    let ret = [deck.pop()];
    while (deck.length) {
        ret.unshift(ret.pop());
        ret.unshift(deck.pop());
    }
    return ret;
};