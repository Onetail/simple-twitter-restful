import { Controller } from 'egg';
import {
  TagsAll,
  Get,
  Responses,
  Prefix,
  Before,
  Parameters,
} from 'egg-shell-decorators';
import { validateUserIdRequiredQuery } from '../middleware/validateIdParams';
import { validateFollowPagenationQuery } from '../middleware/validatePagenationQuery';
import { UserIdRequiredQuery } from './docs/Req/user';
import { FollowPagenationParams } from './docs/Req/util/pagenation';
import { GetUserFollowResponse } from './docs/Res/follow';
import { errorMsg } from './docs/Res/util/httpMessage';
import { PagenationDTO } from './dto/pagenation';

@TagsAll('follow')
@Prefix('follow')
export default class FollowController extends Controller {
  @Before([validateFollowPagenationQuery, validateUserIdRequiredQuery])
  @Get('/list')
  @Parameters([...FollowPagenationParams, UserIdRequiredQuery])
  @Responses({
    200: {
      description: 'get userFollow list',
      schema: {
        ...GetUserFollowResponse,
      },
    },
    404: {
      description: errorMsg[4000].description,
      schema: {
        type: 'object',
        properties: {
          message: errorMsg[4000],
        },
      },
    },
  })
  public async getFollowList({ query }) {
    const { ctx } = this;
    const data: PagenationDTO = query;
    const { sort, count, page, order } = data;
    const { userId } = query;
    let result: {
      rows: Array<object>;
      count: number;
    } = { rows: [], count: 0 };

    const isUser = await ctx.service.user.findOneUserExistByUserId(userId);
    if (!isUser) {
      throw ctx.app.errorHandler(
        ctx.app.Error.ERR_NOT_FOUND,
        errorMsg[4000].example,
      );
    }

    const userFollowCount = await this.app.redis.get(
      `${this.app.config.redisSet.keys.userFollowCount}:${userId}`,
    );

    if (!userFollowCount) {
      result = await ctx.service.userFollow.findListUserFollowsByUserId(
        userId,
        {
          sort,
          count,
          page,
          order,
        },
      );
    } else {
      result.rows = await ctx.service.userFollow.findListUserFollowsByUserId(
        userId,
        {
          sort,
          count,
          page,
          order,
        },
      );
      result.count = Number(userFollowCount);
    }

    ctx.body = { body: result.rows, page, total: result.count };
  }
}
