import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  config.redis = {
    client: {
      port: 6379, // Redis port
      host: process.env.REDIS_HOST, // Redis host
      password: 'auth',
      db: 0,
    },
  };

  config.io = {
    init: {}, // passed to engine.io
    namespace: {
      '/': {
        connectionMiddleware: ['auth'],
        packetMiddleware: [],
      },
    },
    redis: {
      host: process.env.IOREDIS_HOST,
      port: 6379,
      db: 0,
    },
  };

  config.sequelize = {
    dialect: 'mysql',
    replication: {
      read: [
        {
          host: process.env.MYSQL_SLAVE_HOST,
          port: process.env.MYSQL_PORT,
          database: process.env.MYSQL_DATABASE || 'storm',
          username: process.env.MYSQL_SLAVE_USER,
          password: process.env.MYSQL_SLAVE_PASSWORD,
        },
      ],
      write: {
        host: process.env.MYSQL_MASTER_HOST,
        port: process.env.MYSQL_PORT,
        database: process.env.MYSQL_DATABASE || 'storm',
        username: process.env.MYSQL_MASTER_USER,
        password: process.env.MYSQL_MASTER_PASSWORD,
      },
    },
    define: {
      // model的全局配置
      timestamps: false, // 添加create,update,delete时间戳
      paranoid: true, // 添加软删除
      freezeTableName: true, // 防止修改表名为复数
      underscored: false, // 防止驼峰式字段被默认转为下划线
    },
    timezone: '+08:00',
  };

  config.jwt = {
    secret: 'STORM_ONLINE_2021',
  };

  config.expiredTime = {
    email: 10, // mins
    sms: 10, // mins
    jwt: '86400000', // 1天
  };

  config.logger = {
    dir: '/home/backend/log',
  };

  config.aws = {
    SES: {
      region: 'eu-central-1',
      Source: 'dev@firewoods-tech.com',
    },
    accessKeyId: process.env.AWSAccessKeyId,
    secretAccessKey: process.env.AWSSecretAccessKey,
  };

  config.ecpay = {
    merchantId: '',
    hashIv: '',
    hashKey: '',
    invoiceHashIv: '',
    invoiceHashKey: '',
    apiUrl: 'https://payment.ecpay.com.tw',
    receiveNewUrl:
      'https://storm-control.cc/api/v1/ecpay/Cashier/AioCheckout/receive/new',
    receiveRenewUrl:
      'https://storm-control.cc/api/v1/ecpay/Cashier/AioCheckout/receive/renew',
    receiveQuotaNewUrl:
      'https://storm-control.cc/api/v1/ecpay/Cashier/AioCheckout/receiveQuota/new',
    receiveQuotaRenewUrl:
      'https://storm-control.cc/api/v1/ecpay/Cashier/AioCheckout/receiveQuota/renew',
    redirectUrl:
      'https://storm-control.cc/api/v1/ecpay/Cashier/AioCheckout/result',
    resultUrl: 'https://storm-control.cc/html/src/Purchase.html',
  };

  config.passportFacebook = {
    key: '',
    secret: '',
    callbackURL: 'https://storm-control.cc/api/v1/passport/facebook/callback',
    profileFields: [
      'id',
      'displayName',
      'photos',
      'email',
      'birthday',
      'first_name',
      'last_name',
      'gender',
    ],
    accessTokenUrl: 'https://graph.facebook.com/v2.9/oauth/access_token',
    debugTokenUrl: 'https://graph.facebook.com/v2.9/debug_token',
  };

  config.verifyUrl = {
    forgetPassword: 'https://storm-control.cc/html/userForget.html',
    emailVerify: 'https://storm-control.cc/html/src/userEmailVerify.html',
  };

  config.passportGoogle = {
    key: 'my oauth1 consumerKey',
    secret: 'my oauth1 consumerSecret',
  };

  config.paypalRestSdk = {
    mode: 'sandbox', // sandbox or live
    clientId: '',
    clientSecret: '',
  };

  config.lineNotify = {
    notifyUrl: 'https://notify-api.line.me/api/notify',
    token: 'q9bHnnqXS3UHTO1bsLoCoIUxdJydwsg51PVRPzqe6hj',
  };

  config.proxy = true;

  config.uploads = {
    base: 'https://storm-control.cc',
    bucket: '/public/uploads/',
  };

  config.keys = 'STORM_PLATFORM_REALLY_FEW_TIME_TODO2020';

  return config;
};
