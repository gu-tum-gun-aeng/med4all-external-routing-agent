import Logger, * as bunyan from "bunyan"

import config from "../config"

export const logger: Logger = bunyan.createLogger({
  level: config.logLevel,
  name: config.appName,
  serializers: {
    http: bunyan.stdSerializers.req,
  },
})
