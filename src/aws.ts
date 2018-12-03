import * as AWS from 'aws-sdk';
import md5 from 'md5';
import { Stream } from 'aws-sdk/clients/glacier';
import env from './env';

export interface File {
  filename: string;
  mimetype: string;
  encoding: string;
  stream: Stream
}

export interface UploadReturnInterface {
  err: Error | null;
  location: string | null;
}

export type UploadFn = (
  userId: string,
  postTitle: string,
  file: File
) => Promise<string>;

const bucket = 'photos.washbear.app';

const acceptedMimeTypes = [
  'image/png',
  'image/jpeg'
];

export const uploadFile: UploadFn = async (userId, postTitle, file) => {
  if (!acceptedMimeTypes.includes(file.mimetype)) {
    throw Error(`mimetype must be one of ${acceptedMimeTypes.join(', ')}`);
  }

  const [name, extension] = file.filename.split('.');
  
  const hashedName = md5(name);
  const hashedTitle = md5(postTitle);

  const s3 = new AWS.S3({
    endpoint: `https://s3.amazonaws.com/${bucket}`,
    accessKeyId: env.awsAccessKeyId,
    secretAccessKey: env.awsSecretAccessKey,
    s3BucketEndpoint: true,
    maxRetries: 10
  });

  const params = {
    Bucket: bucket,
    Key: `${userId}/${hashedTitle}/${hashedName}.${extension}`,
    Body: file.stream,
    ContentType: file.mimetype,
    ContentEncoding: file.encoding,
    ACL: 'public-read'
  };

  try {
    const putObject = await s3.upload(params).promise();

    return putObject.Location;
  } catch (err) {
    console.log(err);
    throw err;
  }
}