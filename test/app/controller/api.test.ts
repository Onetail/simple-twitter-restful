import { app, mock } from 'egg-mock/bootstrap';

const ApiVer = '1.0';
const Prefix = 'api-docs/public/json/main.json';

mock.consoleLevel('NONE');
describe('test/app/controller/api.test.js', () => {
  afterEach(mock.restore);

  describe(`GET ${ApiVer}/${Prefix}`, () => {
    it('200 everyone ok', async () => {
      const result = await app
        .httpRequest()
        .get(`/${ApiVer}/${Prefix}`)
        .expect(200);

      return result;
    });
  });
});
