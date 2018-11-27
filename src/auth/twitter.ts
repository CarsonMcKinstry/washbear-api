/**
 * This will get uncommented and used over in passport.ts
 * once I figure out how to not have to use the oauth1
 * workflow
 */

// import dotenv from 'dotenv';
// import { 
//   Strategy as TwitterStrategy,
//   Profile as TwitterProfile
// } from 'passport-twitter';

// if (process.env.NODE_ENV !== 'production') {
//   dotenv.config();
// }


// const twitterHandler = async (
//   accessToken: any, 
//   refreshToken: any, 
//   profile: TwitterProfile, 
//   done: any,
// ) => {
//   const { 
//     _json
//   } = profile;
//   console.log(profile);

//   return done(null, null);
// }


// export const twitterStrategy = new TwitterStrategy({
//   callbackURL: (process.env.TWITTER_CALLBACK as string),
//   consumerKey: (process.env.TWITTER_CONSUMER_KEY as string),
//   consumerSecret: (process.env.TWITTER_CONSUMER_SECRET as string)
// }, twitterHandler);