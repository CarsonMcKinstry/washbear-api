import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

export default {
  nodeEnv: (process.env.NODE_ENV as string) || 'development',
  signature: (process.env.SIGNATURE as string),
  secret: (process.env.SECRET as string),
  facebookAppId: (process.env.FACEBOOK_APP_ID as string),
  facebookAppSecret: (process.env.FACEBOOK_APP_SECRET as string),
  facebookCallback: (process.env.FACEBOOK_CALLBACK as string),
  twitterConsumerKey: (process.env.TWITTER_CONSUMER_KEY as string),
  twitterConsumerSecret: (process.env.TWITTER_CONSUMER_SECRET as string),
  twitterCallback: (process.env.TWITTER_CALLBACK as string),
  awsAccessKeyId: (process.env.AWS_ACCESS_KEY_ID as string),
  awsSecretAccessKey: (process.env.AWS_SECRET_ACCESS_KEY as string),
  port: undefined
}