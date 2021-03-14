import * as httpStatus from './httpStatus';

export const successMsg = {
  success: {
    type: 'string',
    example: 'success',
    description: 'success',
  },
};

export const errorMsg = {
  failure: {
    type: 'string',
    example: 'failure',
    description: 'not description',
  },
  error: {
    type: 'string',
    example: 'error',
    description: 'not description',
  },
  4000: {
    type: 'string',
    example: 'Not found the userId',
    description: '找不到 userId',
  },
  4001: {
    type: 'string',
    example: 'Cannot follow youself',
    description: 'userId 與 token userId 相同',
  },
  4002: {
    type: 'string',
    example: 'Already follow this user',
    description: '已經 follow 過該 user',
  },
};

export const successUpdateResponse = {
  type: 'object',
  properties: {
    status: httpStatus.successStatusResponse,
    msg: successMsg.success,
    body: {
      type: 'number',
      example: 1,
      description: '1 is changed , 0 is not changed',
    },
  },
};
