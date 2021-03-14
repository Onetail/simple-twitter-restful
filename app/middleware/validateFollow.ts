import { Context } from 'egg';

export function validateFollowPostBody(): any {
  return async (ctx: Context) => {
    try {
      ctx.validate(
        {
          title: {
            type: 'string',
            required: false,
            allowEmpty: true,
          },
          weights: {
            type: 'number',
            min: 1,
            max: 65535,
            required: false,
          },
        },
        ctx.request.body,
      );
    } catch (e) {
      throw ctx.app.errorHandler(
        ctx.app.Error.ERR_REQUEST_DATA,
        ctx.app.Error.ERR_REQUEST_DATA,
      );
    }
  };
}
