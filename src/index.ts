import axios from "axios"
import Dotenv from "dotenv"

Dotenv.config()

// import ColinkProcessor from "./processor/colinkProcessor"
import PedProcessor from "./processor/pedProcessor"
import { ParallelProcessConsumer } from "./processor/processor"
import WisibleProcessor from "./processor/wisibleProcessor"
import { logger } from "./util/logger"
import messageQueue from "./util/messageQueue"

axios.defaults.validateStatus = (status) => {
  return status === 200
}

logger.info("Start Application")

const run = async () => {
  await messageQueue.initialize()

  // const colink = new ColinkProcessor()
  const wisible = new WisibleProcessor()
  const ped = new PedProcessor()

  const processes = new ParallelProcessConsumer([wisible, ped])

  await processes.consume()

  logger.info("Terminating Application")
}

run().catch(logger.error)
