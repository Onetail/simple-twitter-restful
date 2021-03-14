import { UserRO } from './user';

const TweetListRO = {
  id: {
    type: 'number',
    example: 1,
    description: 'tweet id ',
  },
  userId: {
    type: 'number',
    example: 1,
    description: 'user id ',
  },
  title: {
    type: 'string',
    example: 'title',
    description: 'article title 最少 4個字',
  },
  content: {
    type: 'string',
    example: 'article content',
    description: 'article content 最少 6個字',
  },
  user: {
    type: 'object',
    properties: {
      ...UserRO,
    },
  },
};

const TweetRO = {
  id: {
    type: 'number',
    example: 1,
    description: 'tweet id ',
  },
  userId: {
    type: 'number',
    example: 1,
    description: 'user id ',
  },
  title: {
    type: 'string',
    example: 'title',
    description: 'article title 最少 4個字',
  },
  content: {
    type: 'string',
    example: 'article content',
    description: 'article content 最少 6個字',
  },
};

export const GetTweetResponse = {
  type: 'object',
  properties: {
    body: {
      type: 'object',
      properties: {
        ...TweetRO,
      },
    },
  },
};

export const GetTweetListResponse = {
  type: 'object',
  properties: {
    body: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          ...TweetListRO,
        },
      },
    },
  },
};
