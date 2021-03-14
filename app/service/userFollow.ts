import { Service } from 'egg';
import { literal } from 'sequelize';

const UserFollowListAttributes = [
  [literal('`user`.`id`'), 'id'],
  [literal('`user`.`name`'), 'name'],
];

const UserFollowExistAttributes = ['userId', 'followId'];

export default class UserFollow extends Service {
  public async countUserFollowsByUserId(userId: number) {
    const data = await this.ctx.model.UserFollow.count({
      where: {
        userId,
      },
    });
    return data;
  }

  public async findListAndCountUserFollowsByUserId(
    userId: number,
    {
      count,
      page,
      order,
      sort,
    }: {
      count: number;
      page: number;
      order: string;
      sort: string;
    },
  ) {
    const data = await this.ctx.model.UserFollow.findAndCountAll({
      attributes: UserFollowListAttributes,
      where: {
        userId,
      },
      include: [
        {
          model: this.ctx.model.User,
          attributes: [],
        },
      ],
      limit: count,
      offset: count * page,
      order: [[order, sort]],
    });
    return data;
  }
  public async findListUserFollowsByUserId(
    userId: number,
    {
      count,
      page,
      order,
      sort,
    }: {
      count: number;
      page: number;
      order: string;
      sort: string;
    },
  ) {
    const data = await this.ctx.model.UserFollow.findAll({
      attributes: UserFollowListAttributes,
      where: {
        userId,
      },
      include: [
        {
          model: this.ctx.model.User,
          attributes: [],
        },
      ],
      limit: count,
      offset: count * page,
      order: [[order, sort]],
    });
    return data;
  }

  public async findOneUserFollowsByUserId(userId: number, followId: number) {
    const data = await this.ctx.model.UserFollow.findOne({
      attributes: UserFollowExistAttributes,
      where: {
        userId,
        followId,
      },
    });
    return data;
  }

  public async createOneForFriendShip(
    userId: number,
    followId: number,
    optional: { transaction: any } = { transaction: null },
  ) {
    const data = await this.ctx.model.UserFollow.create(
      {
        userId,
        followId,
      },
      { transaction: optional!!.transaction },
    );
    return data;
  }
  public async deleteAllUserFollow() {
    return await this.ctx.model.UserFollow.destroy({ where: {} });
  }
}
