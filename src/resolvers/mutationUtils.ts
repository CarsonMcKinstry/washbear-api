import { compose, deburr, map, split, toLower } from 'lodash/fp';
import moment from 'moment';
import { uploadFile } from '../aws';
import { PhotoCreateWithoutPostInput } from '../generated/prisma-client';
import { GQLCreatePhotoInput } from '../schema.d';

export const formatPhoto = async (
  userId: string,
  postTitle: string,
  photo: GQLCreatePhotoInput | null
): Promise<PhotoCreateWithoutPostInput> => {
  const { url, file, title, description, price, currency } = photo as GQLCreatePhotoInput;

  const newPhoto = {
    currency,
    description,
    postedBy: {
      connect: { id: userId }
    },
    price,
    title,
    url: file
      ? await uploadFile(userId, postTitle, await file)
      : url as string,
  };

  return newPhoto;
};

export const formatAvatar = async (
  userId: string,
  photo: GQLCreatePhotoInput
) => {
  const { url, file } = photo;

  const createdAt = moment().unix();

  const newPhoto = {
    url: file
      ? await uploadFile(userId, `${userId}-${createdAt}-avatar`, await file)
      : url as string
  };

  return newPhoto;
};

export const titleToTags = (title: string): string[] => compose(
  split(' '),
  toLower,
  deburr,
)(title);

export const formatTags = (tags: string[]) => map((tag) => ({ name: tag }), tags);
