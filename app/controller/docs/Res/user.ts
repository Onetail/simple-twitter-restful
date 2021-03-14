export const UserRO = {
  id: {
    type: 'number',
    example: 1,
    description: 'user id ',
  },
  name: {
    type: 'string',
    example: 'u1',
    description: 'user name ',
  },
};

export const GetUserResponse = {
  type: 'object',
  properties: {
    body: {
      type: 'object',
      properties: {
        ...UserRO,
      },
    },
  },
};
