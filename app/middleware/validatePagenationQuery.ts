import { FollowColumnInOrderBy } from '../controller/dto/follow';
import { DatabaseSort } from '../controller/enum/database';

export function validateFollowPagenationQuery() {
  return async (ctx) => {
    try {
      ctx.query.page = ctx.query.page ? await parseInt(ctx.query.page) : 1;
      ctx.query.count = ctx.query.count ? await parseInt(ctx.query.count) : 10;
      ctx.query.sort = ctx.query.sort
        ? await ctx.query.sort.toUpperCase()
        : ctx.query.sort;
      ctx.query.page -= 1;
      ctx.validate(
        {
          page: { type: 'number', min: 0, required: false, allowEmpty: false },
          count: {
            type: 'number',
            max: 100,
            min: 1,
            required: false,
            allowEmpty: false,
          },
          order: {
            type: 'enum',
            values: Object.keys(FollowColumnInOrderBy)
              .map((key) => FollowColumnInOrderBy[key])
              .filter(Boolean),
            default: FollowColumnInOrderBy.ID,
            required: false,
            allowEmpty: false,
          },
          sort: {
            type: 'enum',
            values: Object.keys(DatabaseSort),
            default: DatabaseSort.DESC,
            required: false,
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
