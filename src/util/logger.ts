import Logger, * as bunyan from "bunyan"

import config from "../config"

console.log(process.env.NODE_ENV)

export const logger: Logger = bunyan.createLogger({
  level: config.logLevel,
  name: config.appName,
  serializers: {
    http: bunyan.stdSerializers.req,
  },
})
