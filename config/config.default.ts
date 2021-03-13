import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import * as path from 'path';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1598340657037_9631';

  config.middleware = ['swagger'];

  config.multipart = {
    fileSize: '20mb',
    mode: 'stream',
    fileExtensions: [
      '.jpg',
      '.png',
      '.gif',
      '.docs',
      '.doc',
      '.jpeg',
      '.pdf',
      '.docx',
    ],
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
    defaultExtension: '.nj',
    mapping: {
      '.html': 'nunjucks', // 左边写成.html后缀，会自动渲染.html文件
    },
  };

  config.swagger = {
    enable: true,
    mountPath: '/docs', // swagger-ui  address  <domain>/test-mount
    swaggerFilePath: '/api/v1/api-docs/public/json/main.json', // swagger file default path
    enableGoogleFont: false,
  };

  config.swaggerConfig = {
    swaggerTitle: 'storm',
    swaggerHost: 'localhost',
    swaggerPort: 7009,
    swaggerVersion: '1.0.0',
    swaggerPath: {
      outPath: './api-docs/public/json/main.json',
      definitionPath: './definitions',
      swaggerPath: './swagger',
    },
  };

  config.static = {
    // 静态化访问前缀,如：`http://127.0.0.1:7001/static/images/logo.png`
    prefix: '/html',
    dir: [
      path.join(appInfo.baseDir, 'app/public'),
      {
        prefix: '/coverage',
        dir: path.join(appInfo.baseDir, 'coverage/lcov-report'),
      },
    ], // `String` or `Array:[dir1, dir2, ...]` 静态化目录,可以设置多个静态化目录
    dynamic: true, // 如果当前访问的静态资源没有缓存，则缓存静态文件，和`preload`配合使用；
    preload: false,
    maxAge: 31536000, // in prod env, 0 in other envs
    buffer: true, // in prod env, false in other envs
  };

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  config.validate = {
    convert: false,
  };

  config.redisSet = {
    INCR: 1,
    DECR: 1,
    keys: {
      userCount: 'userCount',
      userEmailAndPhoneVerify: 'userEmailAndPhoneVerify',
      userKYCVerify: 'userKYCVerify',
      userOnlineCount: 'userOnlineCount',
      exchangeRate_USD_TWD: 'exchangeRate_USD_TWD',
      exchangeRate_USD_CNY: 'exchangeRate_USD_CNY',
    },
  };

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: [
      'http://localhost:7009',
      'http://waynechu.synology.me:7009',
      'http://localhost:7009/html/src/payment.html',
      'https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5',
    ],
  };

  config.logger = {
    dir: './logs',
  };

  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
