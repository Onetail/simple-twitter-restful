export const TweetPostRequest = [
  {
    name: 'title',
    in: 'query',
    required: true,
    schema: {
      type: 'string',
      example: 'title',
      description: 'article title 最少 4個字',
    },
  },
  {
    name: 'content',
    in: 'query',
    required: true,
    schema: {
      type: 'string',
      example: 'article content',
      description: 'article content 最少 6個字',
    },
  },
];
