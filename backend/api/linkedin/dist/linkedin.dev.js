"use strict";

// const { reset } = require('nodemon');
// var Linkedin = require('node-linkedin')('86qhkqwvft06lg', 'gIAbWp0TiWUHQ8KE');
var token = 'AQWGVtelAHpb72PDZKREmCE4dnRLYKnT4DHHdBDXluCg2QUGexbwRFd12tZzy3t2dgXyqh65PkopQWIkFfKQZJwoRJ0lMUiaK4WyZa5txVuo_j_Fu4H6T6xFomEyueMsB5ZXICrjck1wHdzsyXGunPQ0LUmHTd_L_PF53H-pSq4TlIVNNIvsc44qnD4_gNAIOI5ewxNv7q3Ku6SNuLhtPumKwCuVmsAiF-ViQMBhkCPoH-WRFcaC5eluR5_8SG5woyGNl5LVmVDHSb3vqReqzNczV81pf4krqBc68KpQENfhtz2fpzqQ4TxZP5r4b5-SCncYU7VTUC-vZ4HGHMWIeF6az2-kNw'; // var linkedin = Linkedin.init(token);
// linkedin.people.me(['id', 'first-name', 'last-name'], function (err, $in) {
//   // Loads the profile by id.
//   console.log($in);
// });
// const routes = require('./routes.js');
// const config = require('./config.js');
// const express = require('express');
// const app = express();
// const session = require('express-session');
// const passport = require('passport');
// const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
// app.set('view engine', 'ejs');
// app.use(
//   session({
//     resave: false,
//     saveUninitialized: true,
//     secret: 'SECRET',
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());
// passport.serializeUser(function (user, cb) {
//   cb(null, user);
// });
// passport.deserializeUser(function (obj, cb) {
//   cb(null, obj);
// });
// passport.use(
//   new LinkedInStrategy(
//     {
//       clientID: config.linkedinAuth.clientID,
//       clientSecret: config.linkedinAuth.clientSecret,
//       callbackURL: config.linkedinAuth.callbackURL,
//       scope: ['r_emailaddress', 'r_liteprofile'],
//     },
//     function (token, tokenSecret, profile, done) {
//       console.log(token);
//       return done(null, profile);
//     }
//   )
// );
// app.use('/', routes);
// const port = 3000;
// app.listen(port, () => {
//   console.log('App listening on port ' + port);
// });

var fetch = require('node-fetch');
/**
 * Profile, Repos, Languages, Topics, Search Code by Language & Keyword
 */


var profile = function profile() {
  var response, data;
  return regeneratorRuntime.async(function profile$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("https://api.linkedin.com/v2/me?oauth2_access_token=".concat(token), {
            method: 'GET'
          }));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          data = _context.sent;
          console.log(data);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}; // Not available


var connections = function connections() {
  var response, data;
  return regeneratorRuntime.async(function connections$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch("https://api.linkedin.com/v2/connections?q=viewer&oauth2_access_token=".concat(token), {
            method: 'GET'
          }));

        case 2:
          response = _context2.sent;
          _context2.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          data = _context2.sent;
          console.log(data);

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
}; // Not Sure what's going on


var fullContent = function fullContent() {
  var response, data;
  return regeneratorRuntime.async(function fullContent$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(fetch("https://api.linkedin.com/v2/me?projection=(memberRichContents*~(content(asset~digitalmediaAsset:playableStreams,linkedinArticle~linkedInArticle:publishingV2,activity~activity:v2,ingestedContent),*),positions*(memberRichContents*~(content(asset~digitalmediaAsset:playableStreams,linkedinArticle~linkedInArticle:publishingV2,activity~activity:v2,ingestedContent),*)),educations*(memberRichContents*~(content(asset~digitalmediaAsset:playableStreams,linkedinArticle~linkedInArticle:publishingV2,activity~activity:v2,ingestedContent),*)))&oauth2_access_token=".concat(token), {
            method: 'GET'
          }));

        case 2:
          response = _context3.sent;
          _context3.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          data = _context3.sent;
          console.log(data);

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  });
};

fullContent();