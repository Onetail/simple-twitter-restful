import { app, mock } from 'egg-mock/bootstrap';

const ApiVer = '1.0';
const Prefix = 'account';

mock.consoleLevel('NONE');
describe('test/app/controller/account.test.js', () => {
  before(async () => {
    const ctx = app.mockContext();
    await ctx.service.tweet.deleteAllTweet();
    await ctx.service.userFollow.deleteAllUserFollow();
    await ctx.service.user.deleteAllUser();
  });
  afterEach(mock.restore);

  describe(`POST ${ApiVer}/${Prefix}/signin`, () => {
    it('400 no query data', async () => {
      const result = await app
        .httpRequest()
        .post(`/${ApiVer}/${Prefix}/signin`)
        .expect(400);

      return result;
    });

    it('200 signin success', async () => {
      const result = await app
        .httpRequest()
        .post(`/${ApiVer}/${Prefix}/signin`)
        .query({
          name: 'test',
        })
        .expect(200);
      return result;
    });

    it('200 signin repeat', async () => {
      const result = await app
        .httpRequest()
        .post(`/${ApiVer}/${Prefix}/signin`)
        .query({
          name: 'test',
        })
        .expect(200);
      return result;
    });
  });
});
