"use strict";

var Twit = require('twit');

require('dotenv').config();

var client = new Twit({
  consumer_key: process.env.TWITTER_USER_KEY,
  consumer_secret: process.env.TWITTER_USER_SECRET,
  access_token: process.env.TWITTER_KEY,
  access_token_secret: process.env.TWITTER_SECRET
});
/**
 * Followers, Following, Tweet by Term, Timeline of User, User Info (Location, Status, Website, Name)
 * Definitely more but these are the main ones
 */

function getFollowersOfUser(username) {
  client.get('followers/ids', {
    screen_name: username
  }, function (err, data, response) {
    if (err) {
      console.log(err);
    } else {// Do something with data
    }
  });
}

function getFollowingOfUser(username) {
  client.get('friends/ids', {
    screen_name: username
  }, function (err, data, response) {
    if (err) {
      console.log(err);
    } else {// Do something with data
    }
  });
}

function searchQueryInUserTweets(username, query) {
  client.get('search/tweets', {
    q: "from:".concat(username, " ").concat(query)
  }, function (err, data, response) {
    if (err) {
      console.log(err);
    } else {// Do something with data
    }
  });
}

function getUserTimeline(username) {
  client.get('statuses/user_timeline', {
    screen_name: username
  }, function (err, data, response) {
    if (err) {
      console.log(err);
    } else {// Do something with data
    }
  });
} // Name, Website, Status, Interests, Groups, Jobs, Location
// Can we navigate to URL and parse HTML?


function showUserDetails(username) {
  client.get('users/show', {
    screen_name: username
  }, function (err, data, response) {
    if (err) {
      console.log(err);
    } else {
      // Do something with data
      console.log(data);
    }
  });
}

showUserDetails('shriyanevatia');