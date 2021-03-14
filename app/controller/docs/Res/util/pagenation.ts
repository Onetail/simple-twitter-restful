export const TotalResponse = {
  total: {
    type: 'number',
    example: 100,
    description: '之後從cache取',
  },
};

export const PagenationResponse = {
  page: {
    type: 'number',
    example: 1,
    description: '第幾頁 從1開始',
  },
  ...TotalResponse,
};
