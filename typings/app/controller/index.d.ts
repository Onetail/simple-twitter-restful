// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAccount from '../../../app/controller/account';
import ExportApi from '../../../app/controller/api';
import ExportFollow from '../../../app/controller/follow';
import ExportFriendship from '../../../app/controller/friendship';
import ExportTweet from '../../../app/controller/tweet';
import ExportDtoAccount from '../../../app/controller/dto/account';
import ExportDtoFollow from '../../../app/controller/dto/follow';
import ExportDtoPagenation from '../../../app/controller/dto/pagenation';
import ExportDtoTweet from '../../../app/controller/dto/tweet';
import ExportDtoUser from '../../../app/controller/dto/user';
import ExportEnumDatabase from '../../../app/controller/enum/database';
import ExportDocsReqAccount from '../../../app/controller/docs/Req/account';
import ExportDocsReqTweet from '../../../app/controller/docs/Req/tweet';
import ExportDocsReqUser from '../../../app/controller/docs/Req/user';
import ExportDocsResAccount from '../../../app/controller/docs/Res/account';
import ExportDocsResFollow from '../../../app/controller/docs/Res/follow';
import ExportDocsResTweet from '../../../app/controller/docs/Res/tweet';
import ExportDocsResUser from '../../../app/controller/docs/Res/user';
import ExportDocsReqUtilPagenation from '../../../app/controller/docs/Req/util/pagenation';
import ExportDocsResUtilHttpMessage from '../../../app/controller/docs/Res/util/httpMessage';
import ExportDocsResUtilHttpStatus from '../../../app/controller/docs/Res/util/httpStatus';
import ExportDocsResUtilPagenation from '../../../app/controller/docs/Res/util/pagenation';

declare module 'egg' {
  interface IController {
    account: ExportAccount;
    api: ExportApi;
    follow: ExportFollow;
    friendship: ExportFriendship;
    tweet: ExportTweet;
    dto: {
      account: ExportDtoAccount;
      follow: ExportDtoFollow;
      pagenation: ExportDtoPagenation;
      tweet: ExportDtoTweet;
      user: ExportDtoUser;
    }
    enum: {
      database: ExportEnumDatabase;
    }
    docs: {
      req: {
        account: ExportDocsReqAccount;
        tweet: ExportDocsReqTweet;
        user: ExportDocsReqUser;
        util: {
          pagenation: ExportDocsReqUtilPagenation;
        }
      }
      res: {
        account: ExportDocsResAccount;
        follow: ExportDocsResFollow;
        tweet: ExportDocsResTweet;
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
