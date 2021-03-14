export interface TweetDTO {
  readonly id: number;
  readonly userId: number;
  readonly title: string;
  readonly content: string;
  readonly createdAt: Date;
}

export const TweetColumnInOrderBy = {
  ID: 'id',
  USERID: 'userId',
  TITLE: 'title',
  CONTENT: 'content',
  CREATEDAT: 'createdAt',
  UPDATEDAT: 'updatedAt',
};
