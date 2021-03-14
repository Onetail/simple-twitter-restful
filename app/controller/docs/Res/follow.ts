import { UserRO } from './user';
import { PagenationResponse } from './util/pagenation';

export const GetUserFollowResponse = {
  type: 'object',
  properties: {
    body: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          ...UserRO,
        },
      },
    },
    ...PagenationResponse,
  },
};
