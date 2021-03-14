import { app, mock } from 'egg-mock/bootstrap';

const ApiVer = '1.0';
const Prefix = 'tweet';

const testA = {
  name: 'userA',
};
const testB = {
  name: 'userB',
};

let userId, userToken;

async function getUserToken(name) {
  const ctx = app.mockContext();
  const result = await ctx.service.user.findOneUserByName(name);

  return await ctx.app.jwt.sign(
    JSON.parse(JSON.stringify(result)),
    ctx.app.config.jwt.secret,
    {
      expiresIn: ctx.app.config.expiredTime.jwt,
    },
  );
}

mock.consoleLevel('NONE');
describe('test/app/controller/friendships.test.js', () => {
  before(async () => {
    const ctx = app.mockContext();
    await ctx.service.tweet.deleteAllTweet();
    await ctx.service.userFollow.deleteAllUserFollow();
    await ctx.service.user.deleteAllUser();

    const userA = await ctx.service.user.createOneForUser(testA.name);
    userId = userA.id;

    await ctx.service.user.createOneForUser(testB.name);

    userToken = await getUserToken(testA.name);
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

    it('200 ok', async () => {
      const result = await app
        .httpRequest()
        .get(`/${ApiVer}/${Prefix}/list`)
        .query({
          userId,
        })
        .expect(200);
      return result;
    });

    it('400 query data error', async () => {
      const result = await app
        .httpRequest()
        .get(`/${ApiVer}/${Prefix}/list`)
        .query({
          userId,
          sort: '123',
        })
        .expect(400);
      return result;
    });

    it('200 query data ok', async () => {
      const result = await app
        .httpRequest()
        .get(`/${ApiVer}/${Prefix}/list`)
        .query({
          userId,
          count: 100,
          page: 1,
          sort: 'deSC',
        })
        .expect(200);
      return result;
    });
  });

  describe(`POST ${ApiVer}/${Prefix}/write`, () => {
    it('401 no authorization', async () => {
      const result = await app
        .httpRequest()
        .post(`/${ApiVer}/${Prefix}/write`)
        .expect(401);

      return result;
    });
    it('400 no query data', async () => {
      const result = await app
        .httpRequest()
        .post(`/${ApiVer}/${Prefix}/write`)
        .set('authorization', `Bearer ${userToken}`)
        .expect(400);

      return result;
    });

    it('400 data length error', async () => {
      const result = await app
        .httpRequest()
        .post(`/${ApiVer}/${Prefix}/write`)
        .set('authorization', `Bearer ${userToken}`)
        .query({
          title: '4',
          content: '5',
        })
        .expect(400);
      return result;
    });

    it('200 ok', async () => {
      const result = await app
        .httpRequest()
        .post(`/${ApiVer}/${Prefix}/write`)
        .set('authorization', `Bearer ${userToken}`)
        .query({
          title: 'test',
          content: 'test content',
        })
        .expect(200);
      return result;
    });
  });
});
