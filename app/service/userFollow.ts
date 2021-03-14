import { Service } from 'egg';
import { literal } from 'sequelize';

const UserFollowListAttributes = [
  [literal('`user`.`id`'), 'id'],
  [literal('`user`.`name`'), 'name'],
];

export default class UserFollow extends Service {
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
  public async deleteAllUserFollow() {
    return await this.ctx.model.UserFollow.destroy({ where: {} });
  }
}
