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
