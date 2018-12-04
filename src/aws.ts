import * as AWS from 'aws-sdk';
import { Stream } from 'aws-sdk/clients/glacier';
import md5 from 'md5';
import env from './env';

export interface File {
  filename: string;
  mimetype: string;
  encoding: string;
  stream: Stream;
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
    accessKeyId: env.awsAccessKeyId,
    endpoint: `https://s3.amazonaws.com/${bucket}`,
    maxRetries: 10,
    s3BucketEndpoint: true,
    secretAccessKey: env.awsSecretAccessKey,
  });

  const params = {
    ACL: 'public-read',
    Body: file.stream,
    Bucket: bucket,
    ContentEncoding: file.encoding,
    ContentType: file.mimetype,
    Key: `${userId}/${hashedTitle}/${hashedName}.${extension}`,
  };

  try {
    const putObject = await s3.upload(params).promise();

    return putObject.Location;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
