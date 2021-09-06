import Dotenv from "dotenv"
Dotenv.config()

import colinkProcessor from "./processor/colinkProcessor"
import { logger } from "./util/logger"
import messageQueue from "./util/messageQueue"

logger.info("Start Application")

const run = async () => {
  await messageQueue.initialize()
  await colinkProcessor.consumePatientWithRiskScore()
  logger.info("Terminating Application")
}

run().catch(logger.error)
