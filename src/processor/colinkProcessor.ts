import axios from "axios"

import config from "../config"
import { TOPIC } from "../constants"
import { ColinkRequest } from "../model/colink/colink.request.model"
import { colinkRequestFromPatient } from "../model/colink/mapper/colink.request.mapper"
import { Patient } from "../model/patient/patient.model"
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
      const patientData: Patient = JSON.parse(message)
      const colinkRequest = colinkRequestFromPatient(patientData)
      await sendToColinkApi(colinkRequest)
    } catch (error) {
      await sendToDeadLetterQueue(message)
    }
  },
}

async function sendToColinkApi(request: ColinkRequest): Promise<void> {
  const headers = { Authorization: `Bearer ${COLINK_API_KEY}` }

  await traceWrapperAsync(
    async () => {
      await axios.post(COLINK_API_URL, request, { headers })
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
