export const UserSigninRequest = {
  name: 'name',
  in: 'query',
  required: true,
  schema: {
    type: 'string',
    example: 'testName',
    description: 'user name',
  },
};
