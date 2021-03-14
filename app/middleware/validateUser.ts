import { Context } from 'egg';

export function validateUserSigninQuery(): any {
  return async (ctx: Context) => {
    try {
      ctx.validate(
        {
          name: {
            type: 'string',
            required: true,
            allowEmpty: false,
          },
        },
        ctx.query,
      );
    } catch (err) {
      throw ctx.app.errorHandler(err, ctx.app.Error.ERR_REQUEST_DATA);
    }
  };
}
