import { Service } from 'egg';
import { UserAttributes } from './user';

const TweetListAttributes = ['id', 'userId', 'title', 'content'];

export default class Tweet extends Service {
  public async findListTweetsByUserId(
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
    const data = await this.ctx.model.Tweet.findAndCountAll({
      attributes: TweetListAttributes,
      where: {
        userId,
      },
      include: [
        {
          model: this.ctx.model.User,
          attributes: UserAttributes,
        },
      ],
      limit: count,
      offset: count * page,
      order: [[order, sort]],
    });
    return data;
  }

  public async createOneForTweet(
    userId: number,
    { title, content }: { title: string; content: string },
    { transaction } = { transaction: null },
  ) {
    const data = await this.ctx.model.Tweet.create(
      {
        userId,
        title,
        content,
      },
      { fields: TweetListAttributes, transaction },
    );
    return data;
  }
  public async deleteAllTweet() {
    return await this.ctx.model.Tweet.destroy({ where: {} });
  }
}
