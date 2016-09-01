Download 
install:  run npm install
run: run node server

Error1
 Error: Cannot find module '../build/Release/bson'
Fix1:
 find in npm module ..node_modules\bson\ext\index.js

and change path to js version in catch block

bson = require('../build/Release/bson');

to

bson = require('../browser_build/bson');


ERRor2:
TypeError: Cannot read property '0' of undefined

Fix2:
Change in facebook.js 
passport.use(new FacebookStrategy({
            clientID: config.facebook.clientID,
            clientSecret: config.facebook.clientSecret,
            callbackURL: config.facebook.callbackURL,
            passReqToCallback: true,
            profileFields: ['id', 'emails', 'name','displayName']// <- add this
        },