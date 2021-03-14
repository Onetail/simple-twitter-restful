// app.ts

import { Application, IBoot } from 'egg';

export default class FooBoot implements IBoot {
  private readonly app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  configWillLoad() {}

  configDidLoad() {
    // Config, plugin files have loaded.
  }

  async didLoad() {
    // All files have loaded, start plugin here.
  }

  async willReady() {
    // All plugins have started, can do some thing before app ready.
  }

  async didReady() {
    // Worker is ready, can do some things
    // don't need to block the app boot.

    const ctx = await this.app.createAnonymousContext();

    await this.app.redis.flushall();
    const userList = await ctx.service.user.findAllIds();
    console.log(userList);
    await Promise.all(
      userList.map(async (user) => {
        await this.app.redis.set(
          `${this.app.config.redisSet.keys.tweetCount}:${user.id}`,
          await ctx.service.tweet.countTweetsByUserId(user.id),
        );
      }),
    );
  }

  async serverDidReady() {
    // Server is listening.
  }

  async beforeClose() {
    // Do some thing before app close.
  }
}
