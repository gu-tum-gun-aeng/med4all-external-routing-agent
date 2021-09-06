import { LogLevel } from "bunyan"
import jsonConfig from "config"

const config: {
  appName: string
  logLevel: LogLevel
  kafkaBrokerList: string[]
  kafkaGroupId: string
  kafkaConnectionTimeout: number
  colinkApiUrl: string
  colinkApiKey: string
} = {
  appName: jsonConfig.get("app.name"),
  logLevel: jsonConfig.get("log.level"),
  kafkaBrokerList: (process.env.KAFKA_BROKER_LIST || jsonConfig.get("kafka.brokers")!).split(","),
  kafkaGroupId: process.env.KAFKA_GROUP_ID || "",
  kafkaConnectionTimeout: Number(process.env.KAFKA_CONNECTION_TIMEOUT) || 1000,
  colinkApiUrl: process.env.COLINK_API_URL || jsonConfig.get("colink.url"),
  colinkApiKey: process.env.COLINK_API_KEY || jsonConfig.get("colink.token"),
}

export default config
