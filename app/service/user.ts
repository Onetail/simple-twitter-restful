import { Service } from 'egg';
export const UserAttributes = ['id', 'name', 'createdAt'];
export const UserExistAttributes = ['id'];

export default class UserFollow extends Service {
  public async findListUsersByUserId({
    count,
    page,
    order,
    sort,
  }: {
    count: number;
    page: number;
    order: string;
    sort: string;
  }) {
    const data = await this.ctx.model.User.findAndCountAll({
      attributes: UserAttributes,
      limit: count,
      offset: count * page,
      order: [[order, sort]],
    });
    return data;
  }

  public async findOneUserExistByUserId(userId: number) {
    const data = await this.ctx.model.User.findOne({
      attributes: UserExistAttributes,
      where: {
        id: userId,
      },
    });
    return data;
  }

  public async deleteAllUser() {
    return await this.ctx.model.User.destroy({ where: {} });
  }
}
