export const UserSigninRequest = {
  name: 'body',
  in: 'body',
  required: true,
  schema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        example: 'testName',
        description: 'user name',
      },
    },
  },
};
