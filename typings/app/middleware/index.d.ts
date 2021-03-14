// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportValidateFollow from '../../../app/middleware/validateFollow';
import ExportValidateIdParams from '../../../app/middleware/validateIdParams';
import ExportValidatePagenationQuery from '../../../app/middleware/validatePagenationQuery';

declare module 'egg' {
  interface IMiddleware {
    validateFollow: typeof ExportValidateFollow;
    validateIdParams: typeof ExportValidateIdParams;
    validatePagenationQuery: typeof ExportValidatePagenationQuery;
  }
}
