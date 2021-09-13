import axios from "axios"
import Dotenv from "dotenv"

Dotenv.config()

import ColinkProcessor from "./processor/colinkProcessor"
import { ParallelProcessConsumer, Processor } from "./processor/processor"
import WisibleProcessor from "./processor/wisibleProcessor"
import { logger } from "./util/logger"
import messageQueue from "./util/messageQueue"

axios.defaults.validateStatus = (status) => {
  return status === 200
}

logger.info("Start Application")

const run = async () => {
  await messageQueue.initialize()

  const processors: Processor[] = [
    new ColinkProcessor(),
    new WisibleProcessor(),
  ]

  console.log(processors)

  await new ParallelProcessConsumer(processors).consume()

  logger.info("Terminating Application")
}

run().catch(logger.error)
