export function validateTweetPostBody() {
  return async (ctx) => {
    try {
      ctx.validate(
        {
          title: {
            type: 'string',
            min: 4,
            required: true,
            allowEmpty: false,
          },
          content: {
            type: 'string',
            min: 6,
            required: true,
            allowEmpty: false,
          },
        },
        ctx.query,
      );
    } catch (err) {
      throw ctx.app.errorHandler(ctx.app.Error.ERR_REQUEST_DATA, err);
    }
  };
}
