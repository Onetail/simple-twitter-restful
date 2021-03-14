import { Controller } from 'egg';
import {
  TagsAll,
  Post,
  Responses,
  Prefix,
  Before,
  Parameters,
} from 'egg-shell-decorators';
import { validateUserIdRequiredQuery } from '../middleware/validateIdParams';
import { validateLogin } from '../middleware/validateLogin';
import { UserAuthorizationDocs, UserIdRequiredQuery } from './docs/Req/user';
import { GetUserFollowResponse } from './docs/Res/follow';
import { errorMsg } from './docs/Res/util/httpMessage';

@TagsAll('friendship')
@Prefix('friendship')
export default class FriendShipController extends Controller {
  @Before([validateLogin, validateUserIdRequiredQuery])
  @Post('/create')
  @Parameters([UserAuthorizationDocs, UserIdRequiredQuery])
  @Responses({
    200: {
      description: 'create a friendships ',
      schema: {
        ...GetUserFollowResponse,
      },
    },
    '403_1': {
      schema: {
        type: 'object',
        properties: {
          message: errorMsg[4001],
        },
      },
    },
    '403_2': {
      schema: {
        type: 'object',
        properties: {
          message: errorMsg[4002],
        },
      },
    },
    404: {
      schema: {
        type: 'object',
        properties: {
          message: errorMsg[4000],
        },
      },
    },
  })
  public async postNewFriendships({ query }) {
    const { ctx } = this;
    const { userId } = query;

    if (String(ctx.userInfo.id) === userId) {
      throw ctx.app.errorHandler(
        ctx.app.Error.ERR_NOT_ALLOWED,
        errorMsg[4001].example,
      );
    }

    const isUser = await ctx.service.user.findOneUserExistByUserId(userId);
    if (!isUser) {
      throw ctx.app.errorHandler(
        ctx.app.Error.ERR_NOT_FOUND,
        errorMsg[4000].example,
      );
    }
    const isFollowUser = await ctx.service.userFollow.findOneUserFollowsByUserId(
      ctx.userInfo.id,
      userId,
    );
    if (isFollowUser) {
      throw ctx.app.errorHandler(
        ctx.app.Error.ERR_NOT_ALLOWED,
        errorMsg[4002].example,
      );
    }

    const result = await ctx.service.userFollow.createOneForFriendShip(
      ctx.userInfo.id,
      userId,
    );

    ctx.body = { body: result };
  }
}
