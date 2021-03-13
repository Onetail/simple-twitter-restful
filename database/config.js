module.exports = {
  test: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'root',
    database: process.env.MYSQL_DATABASE || 'simpleTwitter',
    host: '127.0.0.1',
    dialect: 'mysql',
    timezone: '+08:00',
    port: '3326',
  },
  local: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'root',
    database: process.env.MYSQL_DATABASE || 'simpleTwitter-local',
    host: '127.0.0.1',
    dialect: 'mysql',
    timezone: '+08:00',
    port: '3326',
  },
  production: {
    username: process.env.MYSQL_USER || process.env.MYSQL_MASTER_USER,
    password: process.env.MYSQL_PASSWORD || process.env.MYSQL_MASTER_PASSWORD,
    database: process.env.MYSQL_DATABASE || 'simpleTwitter',
    host: process.env.MYSQL_HOST || process.env.MYSQL_MASTER_HOST,
    dialect: 'mysql',
    timezone: '+08:00',
    port: '3306',
  },
};
