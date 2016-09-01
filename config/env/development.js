module.exports = {
    db: 'mongodb://localhost/mean-book',
    sessionSecret: 'developmentSessionSecret',
    facebook: {
        clientID: '1372118666134846',
        clientSecret: 'df73e43eee67e2191629a4473c7db749',
        callbackURL: 'http://localhost:3000/oauth/facebook/callback'
    },
    twitter: {
        clientID: 'lYRMrgAQDoTYrDMg7Exfp9BQa',
        clientSecret: 'M3v2Yj45dlLoNtNnFaVl4nrym534YdEWJj5UtDjcXyA9FgedPb',
        callbackURL: 'http://localhost:3000/oauth/twitter/callback'
    },
    google: {
        clientID: '417162800844-oi51bqpcfme8rjo920gn66pbufvtf6oc.apps.googleusercontent.com',
        clientSecret: '0rKtOaFiv_0h9RhnZ9tlMz6n',
        callbackURL: 'http://localhost:3000/oauth/google/callback'
    }
};
