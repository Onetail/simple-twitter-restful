import { Context } from 'egg';
import * as httpMessage from '../controller/docs/Res/util/httpMessage';
import { UserDTO } from '../controller/dto/user';

async function getUserInfoFromJwtToken(ctx) {
  const token = ctx.header.authorization.split(' ')[1];

  const user: UserDTO = await ctx.app.jwt.verify(
    token,
    ctx.app.config.jwt.secret,
  );

  if (!user) {
    throw httpMessage.errorMsg[4000].example;
  }

  return user;
}

export function validateLogin(): any {
  return async (ctx: Context) => {
    try {
      const userData = await getUserInfoFromJwtToken(ctx);

      ctx.userInfo = await userData;
    } catch (err) {
      throw ctx.app.errorHandler(ctx.app.Error.ERR_NOT_AUTHORIZATION, err);
    }
  };
}
