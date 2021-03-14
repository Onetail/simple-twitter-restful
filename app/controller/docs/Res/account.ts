const TokenRO = {
  token: {
    type: 'string',
    example:
      'eyJhbGciOiJIUzI1NiJ9.W3siaWQiOjEsImVtYWlsIjoicGFzb3Nvbmc5MUBnbWFpbC5jb20iLCJwaG9uZSI6IjA5MDkwMDk2OTgiLCJ0aGlyZF9wYXJ0eV9pZCI6bnVsbCwidGhpcmRfcGFydHlfdG9rZW4iOm51bGx9XQ.oT1_520_VdOg-rTBna9QU7gVtPSqgW5D3Muw8850v4g',
  },
};

export const UserSigninResponse = {
  type: 'object',
  properties: {
    body: {
      type: 'object',
      properties: {
        ...TokenRO,
      },
    },
  },
};
