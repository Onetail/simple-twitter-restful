import { app, mock } from 'egg-mock/bootstrap';
import * as assert from 'assert';

mock.consoleLevel('NONE');
describe('test/app/extend/application.test.js', () => {
  afterEach(mock.restore);

  describe('500 ServerInternal Error', () => {
    it('errorhandler not params', async () => {
      assert(app.errorHandler(null, null));
      assert(app.errorHandler(null, null).status === 500);
      assert(app.errorHandler('666', null).message === '666');
    });
  });

  describe('404 Not found', () => {
    it('errorhandler 404', async () => {
      const ctx = app.mockContext();
      assert(app.errorHandler(ctx.app.Error.ERR_NOT_FOUND, null));
      assert(
        app.errorHandler(ctx.app.Error.ERR_NOT_FOUND, null).status === 404,
      );
      assert(
        app.errorHandler(ctx.app.Error.ERR_NOT_FOUND, '666').message === '666',
      );
    });
  });

  describe('403 Forbidden', () => {
    it('errorhandler 403', async () => {
      const ctx = app.mockContext();
      assert(app.errorHandler(ctx.app.Error.ERR_NOT_ALLOWED, null));
      assert(
        app.errorHandler(ctx.app.Error.ERR_NOT_ALLOWED, null).status === 403,
      );
      assert(
        app.errorHandler(ctx.app.Error.ERR_NOT_ALLOWED, '666').message ===
          '666',
      );
    });
  });

  describe('401 Not Authorization', () => {
    it('errorhandler 401', async () => {
      const ctx = app.mockContext();
      assert(app.errorHandler(ctx.app.Error.ERR_NOT_AUTHORIZATION, null));
      assert(
        app.errorHandler(ctx.app.Error.ERR_NOT_AUTHORIZATION, null).status ===
          401,
      );
      assert(
        app.errorHandler(ctx.app.Error.ERR_NOT_AUTHORIZATION, '666').message ===
          '666',
      );
    });
  });

  describe('400 Bad Request', () => {
    it('errorhandler 400', async () => {
      const ctx = app.mockContext();
      assert(app.errorHandler(ctx.app.Error.ERR_REQUEST_DATA, null));
      assert(
        app.errorHandler(ctx.app.Error.ERR_REQUEST_DATA, null).status === 400,
      );
      assert(
        app.errorHandler(ctx.app.Error.ERR_REQUEST_DATA, '666').message ===
          '666',
      );
    });
  });
});
