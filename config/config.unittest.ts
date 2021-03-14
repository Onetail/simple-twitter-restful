import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  config.sequelize = {
    dialect: 'mysql',
    host: process.env.MYSQL_HOST || '127.0.0.1',
    port: 3326,
    database: process.env.MYSQL_DATABASE || 'simpleTwitter-local',
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'root',
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
    secret: '123456',
  };

  config.expiredTime = {
    email: 10, // mins
    sms: 10, // mins
    jwt: '604800000', // 7天
  };

  config.redis = {
    client: {
      port: 6388, // Redis port
      host: '127.0.0.1', // Redis host
      password: 'auth',
      db: 0,
    },
  };

  return config;
};
