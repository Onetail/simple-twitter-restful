import { FollowColumnInOrderBy } from '../../../dto/follow';
import { TweetColumnInOrderBy } from '../../../dto/tweet';
import { DatabaseSort } from '../../../enum/database';

const CountParams = {
  name: 'count',
  in: 'query',
  required: false,
  schema: {
    type: 'string',
    example: '1-100',
    description: 'get data count, default 10',
  },
};

const PageParams = {
  name: 'page',
  in: 'query',
  required: false,
  schema: {
    type: 'string',
    example: '1',
    description: 'get data page, default 1 ',
  },
};

const SortParams = {
  name: 'sort',
  in: 'query',
  required: false,
  schema: {
    type: 'string',
    example: Object.keys(DatabaseSort)
      .map((key) =>
        typeof DatabaseSort[key] === 'string' ? DatabaseSort[key] : '',
      )
      .filter(Boolean),
    description: 'get data sort desc asc, default desc ',
  },
};

const FollowParams = {
  name: 'order',
  in: 'query',
  required: false,
  schema: {
    type: 'string',
    example: Object.keys(FollowColumnInOrderBy)
      .map((key) =>
        typeof FollowColumnInOrderBy[key] === 'string'
          ? FollowColumnInOrderBy[key]
          : '',
      )
      .filter(Boolean),
    description: 'get follow column  ',
  },
};

const TweetParams = {
  name: 'order',
  in: 'query',
  required: false,
  schema: {
    type: 'string',
    example: Object.keys(TweetColumnInOrderBy)
      .map((key) =>
        typeof TweetColumnInOrderBy[key] === 'string'
          ? TweetColumnInOrderBy[key]
          : '',
      )
      .filter(Boolean),
    description: 'get tweet column  ',
  },
};

export const FollowPagenationParams = [
  CountParams,
  PageParams,
  FollowParams,
  SortParams,
];

export const TweetPagenationParams = [
  CountParams,
  PageParams,
  TweetParams,
  SortParams,
];
