Download 

install:  run npm install

run: run node server

Error

 Error: Cannot find module '../build/Release/bson'
 
Fix
 find in npm module ..node_modules\bson\ext\index.js

and change path to js version in catch block

bson = require('../build/Release/bson');

to

bson = require('../browser_build/bson');
