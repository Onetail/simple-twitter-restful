import { app, mock } from 'egg-mock/bootstrap';

const ApiVer = '1.0';
const Prefix = 'friendship';

const testA = {
  name: 'userA',
};
const testB = {
  name: 'userB',
};

let userId, followId, userToken;

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

    const userB = await ctx.service.user.createOneForUser(testB.name);
    followId = userB.id;

    userToken = await getUserToken(testA.name);
  });
  afterEach(mock.restore);

  describe(`POST ${ApiVer}/${Prefix}/create`, () => {
    it('401 no authorization', async () => {
      const result = await app
        .httpRequest()
        .post(`/${ApiVer}/${Prefix}/create`)
        .expect(401);

      return result;
    });
    it('400 no query data', async () => {
      const result = await app
        .httpRequest()
        .post(`/${ApiVer}/${Prefix}/create`)
        .set('authorization', `Bearer ${userToken}`)
        .expect(400);

      return result;
    });

    it('404 userId not found', async () => {
      const result = await app
        .httpRequest()
        .post(`/${ApiVer}/${Prefix}/create`)
        .set('authorization', `Bearer ${userToken}`)
        .query({
          userId: 0,
        })
        .expect(404);
      return result;
    });

    it('403 myself userId', async () => {
      const result = await app
        .httpRequest()
        .post(`/${ApiVer}/${Prefix}/create`)
        .set('authorization', `Bearer ${userToken}`)
        .query({
          userId,
        })
        .expect(403);
      return result;
    });

    it('200 follow ok', async () => {
      const result = await app
        .httpRequest()
        .post(`/${ApiVer}/${Prefix}/create`)
        .set('authorization', `Bearer ${userToken}`)
        .query({
          userId: followId,
        })
        .expect(200);
      return result;
    });

    it('403 already follow user', async () => {
      const result = await app
        .httpRequest()
        .post(`/${ApiVer}/${Prefix}/create`)
        .set('authorization', `Bearer ${userToken}`)
        .query({
          userId: followId,
        })
        .expect(403);
      return result;
    });
  });
});
