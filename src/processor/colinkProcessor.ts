import axios from "axios"

import config from "../config"
import { SendToColinkRequest } from "../model/colink/colink.request.model"
import { colinkRequestFromPatient } from "../model/colink/mapper/colink.request.mapper"
import { Patient } from "../model/patient/patient.model"
import { traceWrapperAsync } from "../util/tracer"

import { SendToExternalProcessor } from "./processor"

const { colinkApiUrl: COLINK_API_URL, colinkApiKey: COLINK_API_KEY } = config

export default class ColinkProcessor extends SendToExternalProcessor {
  async sendToExternal(patient: Patient): Promise<void> {
    const colinkRequest = colinkRequestFromPatient(patient)
    const colinkInsertRequest: SendToColinkRequest = {
      record_count: 1,
      record_data: [colinkRequest],
    }

    sendToColinkInsertApi(colinkInsertRequest)
  }
}

async function sendToColinkInsertApi(
  request: SendToColinkRequest
): Promise<void> {
  const headers = { Authorization: `Bearer ${COLINK_API_KEY}` }

  await traceWrapperAsync(
    async () => {
      await axios.post(COLINK_API_URL, request, { headers }).then((res) => {
        console.log(res.data)
        if (res.status === 200) {
          return Promise.resolve("success")
        } else {
          return Promise.resolve(
            "error: " + res.data + " status is " + res.status
          )
        }
      })
    },
    "external",
    "sendToColinkInsertApi",
    true
  )
}
