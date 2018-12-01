import * as AWS from 'aws-sdk';
import env from './env';

const s3 = new AWS.S3({
  accessKeyId: env.awsAccessKeyId,
  secretAccessKey: env.awsSecretAccessKey
});

