// There is an authentication system that works with authentication tokens.
// For each session, the user will receive a new authentication token that will expire timeToLive seconds after the currentTime.
// If the token is renewed, the expiry time will be extended to expire timeToLive seconds after the(potentially different) currentTime.
// Implement the AuthenticationManager class:
// - AuthenticationManager(int timeToLive) constructs the AuthenticationManager and sets the timeToLive.
// - generate(string tokenId, int currentTime) generates a new token with the given tokenId at the given currentTime in seconds.
// - renew(string tokenId, int currentTime) renews the unexpired token with the given tokenId at the given currentTime in seconds.
//   If there are no unexpired tokens with the given tokenId, the request is ignored, and nothing happens.
// - countUnexpiredTokens(int currentTime) returns the number of unexpired tokens at the given currentTime.
// Note that if a token expires at time t, and another action happens on time t(renew or countUnexpiredTokens), the expiration takes place before the other actions.

/**
 * @param {number} timeToLive
 */
var AuthenticationManager = function (timeToLive) {
    this.ttl = timeToLive;
    this.tokens = new Map();
};

/** 
 * @param {string} tokenId 
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.generate = function (tokenId, currentTime) {
    this.tokens.set(tokenId, currentTime + this.ttl);
};

/** 
 * @param {string} tokenId 
 * @param {number} currentTime
 * @return {void}
 */
AuthenticationManager.prototype.renew = function (tokenId, currentTime) {
    if (this.tokens.get(tokenId) > currentTime) {
        this.generate(tokenId, currentTime);
    }
};

/** 
 * @param {number} currentTime
 * @return {number}
 */
AuthenticationManager.prototype.countUnexpiredTokens = function (currentTime) {
    for (let [key, val] of this.tokens) {
        if (currentTime >= val) {
            this.tokens.delete(key);
        }
    }
    return this.tokens.size;
};

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */