// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTweet from '../../../app/model/tweet';
import ExportUser from '../../../app/model/user';
import ExportUserFollow from '../../../app/model/userFollow';

declare module 'egg' {
  interface IModel {
    Tweet: ReturnType<typeof ExportTweet>;
    User: ReturnType<typeof ExportUser>;
    UserFollow: ReturnType<typeof ExportUserFollow>;
  }
}
