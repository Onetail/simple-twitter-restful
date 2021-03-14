export interface BannerDTO {
  readonly id: string;
  readonly userId: number;
  readonly followId: number;
  readonly createdAt: Date;
}

export const FollowColumnInOrderBy = {
  ID: 'id',
  USERID: 'userId',
  FOLLOWID: 'followId',
  CREATEDAT: 'createdAt',
  UPDATEDAT: 'updatedAt',
};
