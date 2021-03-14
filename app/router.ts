import { Application } from 'egg';
import { EggShell } from 'egg-shell-decorators';

export default (app: Application) => {
  const apiVer = '/1.0/';

  EggShell(app, {
    prefix: apiVer,
    quickStart: false,
    swaggerOpt: {
      open: true,
      title: app.config.swaggerConfig.swaggerTitle,
      version: app.config.swaggerConfig.swaggerVersion,
      host: app.config.swaggerConfig.swaggerHost,
      port: app.config.swaggerConfig.swaggerPort,
      schemes: ['http'],
      paths: app.config.swaggerConfig.swaggerPath,
    },
  });
};
