import { Controller } from 'egg';
import {
  TagsAll,
  Post,
  Responses,
  Prefix,
  Before,
  Parameters,
} from 'egg-shell-decorators';
import { UserSigninRequest } from './docs/Req/account';
import { UserSigninResponse } from './docs/Res/account';
import { validateUserSigninQuery } from '../middleware/validateUser';
import { UserSigninDTO } from './dto/account';

@TagsAll('account')
@Prefix('account')
export default class AccountController extends Controller {
  @Before([validateUserSigninQuery])
  @Post('/signin')
  @Parameters([{ ...UserSigninRequest }])
  @Responses({
    200: {
      description: '登入成功',
      schema: {
        ...UserSigninResponse,
      },
    },
  })
  public async userLogin({ query }) {
    const { ctx } = this;
    const data: UserSigninDTO = query;
    const { name } = data;
    let result;

    result = await ctx.service.user.findOneUserByName(name);

    if (!result) {
      result = await ctx.service.user.createOneForUser(name);
    }

    const token = await ctx.app.jwt.sign(
      JSON.parse(JSON.stringify(result)),
      ctx.app.config.jwt.secret,
      {
        expiresIn: ctx.app.config.expiredTime.jwt,
      },
    );

    ctx.body = { body: { token } };
  }
}
