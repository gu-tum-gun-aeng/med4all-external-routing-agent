import axios from "axios"

import config from "../config"
import { Patient } from "../model/patient/patient.model"
import { wisibleRequestFromPatient } from "../model/wisible/mapper/wisible.request.mapper"
import { SendToWisibleRequest } from "../model/wisible/wisible.request.model"
import { traceWrapperAsync } from "../util/tracer"

import { SendToExternalProcessor } from "./processor"

const { wisibleApiUrl: WISIBLE_API_URL, wisibleApiKey: WISIBLE_API_KEY } =
  config

export default class WisibleProcessor extends SendToExternalProcessor {
  async sendToExternal(patient: Patient): Promise<void> {
    if (!shouldSendToWisibleApi(patient)) {
      return
    }

    const wisibleRequest = wisibleRequestFromPatient(patient)

    sendToWisibleApi(wisibleRequest)
  }
}

// TODO: Implement this properly, for example, if wisible is not valid then return false
function shouldSendToWisibleApi(_patient: Patient): boolean {
  return true
}

async function sendToWisibleApi(request: SendToWisibleRequest): Promise<void> {
  const headers = { Authorization: `Bearer ${WISIBLE_API_KEY}` }

  await traceWrapperAsync(
    async () => {
      await axios.post(WISIBLE_API_URL, request, { headers }).then((res) => {
        if (res.status === 200) {
          return Promise.resolve("success")
        } else {
          return Promise.reject(
            new Error("error: " + res.data + " status is " + res.status)
          )
        }
      })
    },
    "external",
    "sendToWisibleApi",
    true
  )
}
