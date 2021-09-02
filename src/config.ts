import { LogLevel } from "bunyan"
import jsonConfig from "config"

const config: {
  appName: string
  logLevel: LogLevel
  kafkaBrokerList: string[]
  kafkaGroupId: string
  kafkaConnectionTimeout: number
  waitingListApiUrl: string
  waitingListApiKey: string
} = {
  appName: jsonConfig.get("app.name"),
  logLevel: jsonConfig.get("log.level"),
  kafkaBrokerList: (process.env.KAFKA_BROKER_LIST || "").split(","),
  kafkaGroupId: process.env.KAFKA_GROUP_ID || "",
  kafkaConnectionTimeout: Number(process.env.KAFKA_CONNECTION_TIMEOUT) || 1000,
  waitingListApiUrl: process.env.WAITING_LIST_API_URL || "",
  waitingListApiKey: process.env.WAITING_LIST_API_KEY || "",
}

export default config
