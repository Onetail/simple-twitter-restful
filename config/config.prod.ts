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

  config.sequelize = {
    dialect: 'mysql',
    replication: {
      read: [
        {
          host: process.env.MYSQL_SLAVE_HOST,
          port: process.env.MYSQL_PORT,
          database: process.env.MYSQL_DATABASE,
          username: process.env.MYSQL_SLAVE_USER,
          password: process.env.MYSQL_SLAVE_PASSWORD,
        },
      ],
      write: {
        host: process.env.MYSQL_MASTER_HOST,
        port: process.env.MYSQL_PORT,
        database: process.env.MYSQL_DATABASE,
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
    secret: 'TWITTER_RESTFUL_2021',
  };

  config.expiredTime = {
    email: 10, // mins
    sms: 10, // mins
    jwt: '86400000', // 1天
  };

  config.logger = {
    dir: '/home/backend/log',
  };

  config.proxy = true;

  config.keys = 'SIMPLE_TWITTER_RESTFUL_2021';

  return config;
};
