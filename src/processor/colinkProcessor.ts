import axios from "axios"

import config from "../config"
import { TOPIC } from "../constants"
import { sendToColinkRequest } from "../model/colink/colink.request.model"
import { colinkRequestFromPatient } from "../model/colink/mapper/colink.request.mapper"
import { Patient } from "../model/patient/patient.model"
import messageQueue from "../util/messageQueue"
import { traceWrapperAsync } from "../util/tracer"

const { colinkApiUrl: COLINK_API_URL, colinkApiKey: COLINK_API_KEY } = config

axios.defaults.validateStatus = (status) => {
  return status == 200
}

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
      const colinkInsertRequest: sendToColinkRequest = {
        record_count: 1,
        record_data: [colinkRequest],
      }
      await sendToColinkInsertApi(colinkInsertRequest)
    } catch (error) {
      await sendToDeadLetterQueue(message)
    }
  },
}

async function sendToColinkInsertApi(
  request: sendToColinkRequest
): Promise<void> {
  const headers = { Authorization: `Bearer ${COLINK_API_KEY}` }

  await traceWrapperAsync(
    async () => {
      await axios.post(COLINK_API_URL, request, { headers }).then((res) => {
        if (res.status == 200) {
          return Promise.resolve("success")
        } else {
          return Promise.reject(
            new Error("error: " + res.data + " status is " + res.status)
          )
        }
      })
    },
    "external",
    "sendToColinkInsertApi",
    true
  )
}

async function sendToDeadLetterQueue(message: string): Promise<void> {
  await messageQueue.publish(TOPIC.PATIENT_WITH_RISK_SCORE_DLQ, message)
}

export default colinkProcessor
