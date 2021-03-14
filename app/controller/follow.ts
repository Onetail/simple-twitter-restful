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
          body: errorMsg[4000],
          code: { type: 'number', example: 4000 },
        },
      },
    },
  })
  public async getFollowList({ query }) {
    const { ctx } = this;
    const data: PagenationDTO = query;
    const { sort, count, page, order } = data;
    const { userId } = query;

    const isUser = await ctx.service.user.findOneUserExistByUserId(userId);
    if (!isUser) {
      throw ctx.app.errorHandler(
        ctx.app.Error.ERR_NOT_FOUND,
        errorMsg[4000].example,
      );
    }
    const result = await ctx.service.userFollow.findListUserFollowsByUserId(
      userId,
      {
        sort,
        count,
        page,
        order,
      },
    );

    ctx.body = { body: result.rows, page, total: result.count };
  }
}
