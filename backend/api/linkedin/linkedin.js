// const { reset } = require('nodemon');

// var Linkedin = require('node-linkedin')('86qhkqwvft06lg', 'gIAbWp0TiWUHQ8KE');
var token =
  'AQWGVtelAHpb72PDZKREmCE4dnRLYKnT4DHHdBDXluCg2QUGexbwRFd12tZzy3t2dgXyqh65PkopQWIkFfKQZJwoRJ0lMUiaK4WyZa5txVuo_j_Fu4H6T6xFomEyueMsB5ZXICrjck1wHdzsyXGunPQ0LUmHTd_L_PF53H-pSq4TlIVNNIvsc44qnD4_gNAIOI5ewxNv7q3Ku6SNuLhtPumKwCuVmsAiF-ViQMBhkCPoH-WRFcaC5eluR5_8SG5woyGNl5LVmVDHSb3vqReqzNczV81pf4krqBc68KpQENfhtz2fpzqQ4TxZP5r4b5-SCncYU7VTUC-vZ4HGHMWIeF6az2-kNw';

// var linkedin = Linkedin.init(token);

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
const fetch = require('node-fetch');

/**
 * Profile, Repos, Languages, Topics, Search Code by Language & Keyword
 */

const profile = async () => {
  const response = await fetch(`https://api.linkedin.com/v2/me?oauth2_access_token=${token}`, {
    method: 'GET',
  });
  const data = await response.json();

  console.log(data);
};

// Not available
const connections = async () => {
  const response = await fetch(
    `https://api.linkedin.com/v2/connections?q=viewer&oauth2_access_token=${token}`,
    {
      method: 'GET',
    }
  );
  const data = await response.json();

  console.log(data);
};

// Not Sure what's going on
const fullContent = async () => {
  const response = await fetch(
    `https://api.linkedin.com/v2/me?projection=(memberRichContents*~(content(asset~digitalmediaAsset:playableStreams,linkedinArticle~linkedInArticle:publishingV2,activity~activity:v2,ingestedContent),*),positions*(memberRichContents*~(content(asset~digitalmediaAsset:playableStreams,linkedinArticle~linkedInArticle:publishingV2,activity~activity:v2,ingestedContent),*)),educations*(memberRichContents*~(content(asset~digitalmediaAsset:playableStreams,linkedinArticle~linkedInArticle:publishingV2,activity~activity:v2,ingestedContent),*)))&oauth2_access_token=${token}`,
    {
      method: 'GET',
    }
  );
  const data = await response.json();

  console.log(data);
};
fullContent();
