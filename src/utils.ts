import { pick } from 'lodash/fp';
import { User } from './generated/prisma-client/';

export const getPayload = (user: User) => pick([
  'email',
  'name',
  'id',
  'facebookId'
], user);
