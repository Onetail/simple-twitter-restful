// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportValidateFollow from '../../../app/middleware/validateFollow';
import ExportValidateIdParams from '../../../app/middleware/validateIdParams';
import ExportValidateLogin from '../../../app/middleware/validateLogin';
import ExportValidatePagenationQuery from '../../../app/middleware/validatePagenationQuery';
import ExportValidateUser from '../../../app/middleware/validateUser';

declare module 'egg' {
  interface IMiddleware {
    validateFollow: typeof ExportValidateFollow;
    validateIdParams: typeof ExportValidateIdParams;
    validateLogin: typeof ExportValidateLogin;
    validatePagenationQuery: typeof ExportValidatePagenationQuery;
    validateUser: typeof ExportValidateUser;
  }
}
