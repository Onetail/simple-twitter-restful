// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportValidateIdParams from '../../../app/middleware/validateIdParams';
import ExportValidateLogin from '../../../app/middleware/validateLogin';
import ExportValidatePagenationQuery from '../../../app/middleware/validatePagenationQuery';
import ExportValidateTweet from '../../../app/middleware/validateTweet';
import ExportValidateUser from '../../../app/middleware/validateUser';

declare module 'egg' {
  interface IMiddleware {
    validateIdParams: typeof ExportValidateIdParams;
    validateLogin: typeof ExportValidateLogin;
    validatePagenationQuery: typeof ExportValidatePagenationQuery;
    validateTweet: typeof ExportValidateTweet;
    validateUser: typeof ExportValidateUser;
  }
}
