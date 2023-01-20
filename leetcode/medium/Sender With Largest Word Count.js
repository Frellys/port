// You have a chat log of n messages. You are given two string arrays messages and senders where messages[i] is a message sent by senders[i].
// A message is list of words that are separated by a single space with no leading or trailing spaces.
// The word count of a sender is the total number of words sent by the sender. Note that a sender may send more than one message.
// Return the sender with the largest word count.
// If there is more than one sender with the largest word count, return the one with the lexicographically largest name.

/**
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
var largestWordCount = function (messages, senders) {
    let seen = {};
    messages.forEach((msg, mdx) => {
        let cnt = msg.split(' ').length;
        let sender = senders[mdx];
        if (!(sender in seen)) {
            seen[sender] = 0;
        }
        seen[sender] += cnt;
    });
    let max = Math.max.apply(null, Object.values(seen));
    return Object.keys(seen).filter(key => seen[key] == max).sort().pop();
};