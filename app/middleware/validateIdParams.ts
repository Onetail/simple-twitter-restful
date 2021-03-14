import { Context } from 'egg';

export function validateUserIdRequiredQuery(): any {
  return async (ctx: Context) => {
    try {
      ctx.validate(
        {
          userId: { type: 'string', required: true, allowEmpty: false },
        },
        ctx.query,
      );
    } catch (err) {
      throw ctx.app.errorHandler(ctx.app.Error.ERR_REQUEST_DATA, err);
    }
  };
}
