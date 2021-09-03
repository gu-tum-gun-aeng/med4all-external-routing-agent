import axios from "axios"

import config from "../config"
import { TOPIC } from "../constants"
import messageQueue from "../util/messageQueue"
import { traceWrapperAsync } from "../util/tracer"

const { colinkApiUrl: COLINK_API_URL, colinkApiKey: COLINK_API_KEY } = config

const colinkProcessor = {
  consumePatientWithRiskScore: async () => {
    await messageQueue.consume(
      TOPIC.PATIENT_WITH_RISK_SCORE_MAIN,
      colinkProcessor.processMessage
    )
  },
  processMessage: async (message: string) => {
    try {
      await sendToColinkApi(message)
    } catch (error) {
      await sendToDeadLetterQueue(message)
    }
  },
}

async function sendToColinkApi(data: string): Promise<void> {
  const headers = { "covid-wl-api-key": COLINK_API_KEY }

  await traceWrapperAsync(
    async () => {
      await axios.post(COLINK_API_URL, data, { headers })
    },
    "external",
    "sendToColinkApi",
    true
  )
}

async function sendToDeadLetterQueue(message: string): Promise<void> {
  await messageQueue.publish(TOPIC.PATIENT_WITH_RISK_SCORE_DLQ, message)
}

export default colinkProcessor
