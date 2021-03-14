import { app, mock } from 'egg-mock/bootstrap';

const ApiVer = '1.0';
const Prefix = 'follow';

const testA = {
  name: 'userA',
};
const testB = {
  name: 'userB',
};

let userId;

mock.consoleLevel('NONE');
describe('test/app/controller/follow.test.js', () => {
  before(async () => {
    const ctx = app.mockContext();
    await ctx.service.tweet.deleteAllTweet();
    await ctx.service.userFollow.deleteAllUserFollow();
    await ctx.service.user.deleteAllUser();

    const userA = await ctx.service.user.createOneForUser(testA.name);
    userId = userA.id;
    await ctx.service.user.createOneForUser(testB.name);
  });
  afterEach(mock.restore);

  describe(`GET ${ApiVer}/${Prefix}/list`, () => {
    it('400 no query data', async () => {
      const result = await app
        .httpRequest()
        .get(`/${ApiVer}/${Prefix}/list`)
        .expect(400);

      return result;
    });

    it('404 userId not found', async () => {
      const result = await app
        .httpRequest()
        .get(`/${ApiVer}/${Prefix}/list`)
        .query({
          userId: 0,
        })
        .expect(404);
      return result;
    });

    it('200 have userId', async () => {
      const result = await app
        .httpRequest()
        .get(`/${ApiVer}/${Prefix}/list`)
        .query({
          userId,
        })
        .expect(200);
      return result;
    });

    it('400 query error', async () => {
      const result = await app
        .httpRequest()
        .get(`/${ApiVer}/${Prefix}/list`)
        .query({
          userId,
          count: 999,
        })
        .expect(400);
      return result;
    });

    it('200 query ok', async () => {
      const result = await app
        .httpRequest()
        .get(`/${ApiVer}/${Prefix}/list`)
        .query({
          userId,
          count: 100,
          sort: 'deSC',
        })
        .expect(200);
      return result;
    });
  });
});
