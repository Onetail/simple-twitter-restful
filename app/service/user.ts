import { Service } from 'egg';
export const UserAttributes = ['id', 'name', 'createdAt'];
export const UserExistAttributes = ['id'];

export default class User extends Service {
  public async findAllIds() {
    const data = await this.ctx.model.User.findAll({
      attributes: UserExistAttributes,
    });
    return data;
  }
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

  public async findOneUserByName(name: string) {
    const data = await this.ctx.model.User.findOne({
      attributes: UserAttributes,
      where: { name },
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

  public async createOneForUser(
    name: string,
    optional: { transaction: any } = { transaction: null },
  ) {
    const data = await this.ctx.model.User.create(
      {
        name,
      },
      { transaction: optional!!.transaction },
    );
    return data;
  }

  public async deleteAllUser() {
    return await this.ctx.model.User.destroy({ where: {} });
  }
}
