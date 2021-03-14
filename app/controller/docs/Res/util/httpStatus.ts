export const successStatusResponse = {
  type: 'string',
  example: 'success',
  description: 'should be http status 200 or 201',
};

export const clientErrorStatusResponse = {
  type: 'string',
  example: 'failure',
  description: 'should be http status 400 401 403 404',
};

export const serverErrorStatusResponse = {
  type: 'string',
  example: 'error',
  description: 'should be http status 500 502',
};

export const ERR_NOT_ALLOWED = {
  type: 'object',
  properties: {
    message: {
      type: 'string',
      example: 'Not allow.',
    },
  },
};

export const ERR_NOT_AUTHORIZATION = {
  type: 'object',
  properties: {
    message: {
      type: 'string',
      example: 'No permission.',
    },
  },
};

export const ERR_NOT_FOUND = {
  type: 'object',
  properties: {
    message: {
      type: 'string',
      example: 'Not found.',
    },
  },
};

export const ERR_REQUEST_DATA = {
  type: 'object',
  properties: {
    message: {
      type: 'string',
      example: 'Bad request data.',
    },
  },
};
