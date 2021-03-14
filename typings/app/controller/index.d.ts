// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportApi from '../../../app/controller/api';
import ExportFollow from '../../../app/controller/follow';
import ExportDtoFollow from '../../../app/controller/dto/follow';
import ExportDtoPagenation from '../../../app/controller/dto/pagenation';
import ExportEnumDatabase from '../../../app/controller/enum/database';
import ExportDocsReqUser from '../../../app/controller/docs/Req/user';
import ExportDocsResFollow from '../../../app/controller/docs/Res/follow';
import ExportDocsResUser from '../../../app/controller/docs/Res/user';
import ExportDocsReqUtilPagenation from '../../../app/controller/docs/Req/util/pagenation';
import ExportDocsResUtilHttpMessage from '../../../app/controller/docs/Res/util/httpMessage';
import ExportDocsResUtilHttpStatus from '../../../app/controller/docs/Res/util/httpStatus';
import ExportDocsResUtilPagenation from '../../../app/controller/docs/Res/util/pagenation';

declare module 'egg' {
  interface IController {
    api: ExportApi;
    follow: ExportFollow;
    dto: {
      follow: ExportDtoFollow;
      pagenation: ExportDtoPagenation;
    }
    enum: {
      database: ExportEnumDatabase;
    }
    docs: {
      req: {
        user: ExportDocsReqUser;
        util: {
          pagenation: ExportDocsReqUtilPagenation;
        }
      }
      res: {
        follow: ExportDocsResFollow;
        user: ExportDocsResUser;
        util: {
          httpMessage: ExportDocsResUtilHttpMessage;
          httpStatus: ExportDocsResUtilHttpStatus;
          pagenation: ExportDocsResUtilPagenation;
        }
      }
    }
  }
}
