// Design a simplified version of Twitter where users can post tweets, follow / unfollow another user, and is able to see the 10 most recent tweets in the user's news feed.
// Implement the Twitter class:
// Twitter() Initializes your twitter object.
// - void postTweet(int userId, int tweetId) Composes a new tweet with ID tweetId by the user userId.
//   Each call to this function will be made with a unique tweetId.
// - List < Integer > getNewsFeed(int userId) Retrieves the 10 most recent tweet IDs in the user's news feed.
//   Each item in the news feed must be posted by users who the user followed or by the user themself.
//   Tweets must be ordered from most recent to least recent.
// - void follow(int followerId, int followeeId) The user with ID followerId started following the user with ID followeeId.
// - void unfollow(int followerId, int followeeId) The user with ID followerId started unfollowing the user with ID followeeId.

var Twitter = function () {
    this.tweets = [];
    this.users = new Map();
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
    this.updateUsers(userId);
    this.tweets.push({ userId, tweetId });
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
    this.updateUsers(userId);
    let ret = [];
    let cur = this.users.get(userId);
    for (let i = this.tweets.length - 1; i > -1 && ret.length != 10; i--) {
        if (cur.has(this.tweets[i].userId)) {
            ret.push(this.tweets[i].tweetId);
        }
    }
    return ret;
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
    this.updateUsers(followerId);
    let cur = this.users.get(followerId);
    cur.add(followeeId);
    this.users.set(followerId, cur);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
    if (this.users.has(followerId)) {
        let cur = this.users.get(followerId);
        cur.delete(followeeId);
        this.users.set(followerId, cur);
    }
};

/**
 * @param {number} id
 * @return {void}
 */
Twitter.prototype.updateUsers = function (id) {
    if (!this.users.has(id)) {
        this.users.set(id, new Set([id]));
    }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */