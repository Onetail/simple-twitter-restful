import { Controller } from 'egg';
import {
  TagsAll,
  Get,
  Post,
  Responses,
  Prefix,
  Before,
  Parameters,
} from 'egg-shell-decorators';
import { validateUserIdRequiredQuery } from '../middleware/validateIdParams';
import { validateLogin } from '../middleware/validateLogin';
import { validateTweetPagenationQuery } from '../middleware/validatePagenationQuery';
import { validateTweetPostBody } from '../middleware/validateTweet';
import { TweetPostRequest } from './docs/Req/tweet';
import { UserAuthorizationDocs, UserIdRequiredQuery } from './docs/Req/user';
import { TweetPagenationParams } from './docs/Req/util/pagenation';
import { GetTweetListResponse, GetTweetResponse } from './docs/Res/tweet';
import { errorMsg } from './docs/Res/util/httpMessage';
import { PagenationDTO } from './dto/pagenation';
import { TweetDTO } from './dto/tweet';

@TagsAll('tweet')
@Prefix('tweet')
export default class TweetController extends Controller {
  @Before([validateTweetPagenationQuery, validateUserIdRequiredQuery])
  @Get('/list')
  @Parameters([...TweetPagenationParams, UserIdRequiredQuery])
  @Responses({
    200: {
      description: 'get user tweet list ',
      schema: {
        ...GetTweetListResponse,
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
  public async getUserTweetList({ query }) {
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

    const result = await ctx.service.tweet.findListTweetsByUserId(userId, {
      sort,
      count,
      page,
      order,
    });

    ctx.body = { body: result.rows, page, total: result.count };
  }

  @Before([validateLogin, validateTweetPostBody])
  @Post('/write')
  @Parameters([UserAuthorizationDocs, ...TweetPostRequest])
  @Responses({
    200: {
      description: 'write a tweet ',
      schema: {
        ...GetTweetResponse,
      },
    },
  })
  public async postUserTweet({ query }) {
    const { ctx } = this;
    const data: TweetDTO = query;
    const { title, content } = data;

    const result = await ctx.service.tweet.createOneForTweet(ctx.userInfo.id, {
      title,
      content,
    });

    ctx.body = { body: result };
  }
}
