export const UserIdRequiredQuery = {
  name: 'userId',
  in: 'query',
  required: true,
  schema: {
    type: 'string',
    example: '1',
    description: 'user ID',
  },
};

export const UserAuthorizationDocs = {
  name: 'authorization',
  in: 'authorization',
  required: true,
  description: `Need authorization token`,
};
