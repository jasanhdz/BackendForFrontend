const dotenv = require('dotenv');

dotenv.config();

const config = {
  port: process.env.PORT || 3001,
  dev: process.env.NODE_ENV,
  apiUrl: process.env.API_URL,
  apiKeyToken: process.env.PUBLIC_API_KEY_TOKEN,
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  sessionSecret: process.env.SESSION_SECRET,
  twitterConsumerKey: process.env.TWITTER_CONSUMER_KEY,
  twitterConsumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  facebookClientId: process.env.FACEBOOK_CLIENT_ID,
  facebookClientSecret: process.env.FACEBOOK_CLIENT_SECRET,
};

module.exports = { config };
