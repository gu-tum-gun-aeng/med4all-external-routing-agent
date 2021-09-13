import axios from "axios"

import config from "../config"
import { Patient } from "../model/patient/patient.model"
import { wisibleRequestFromPatient } from "../model/wisible/mapper/wisible.request.mapper"
import { SendToWisibleRequest } from "../model/wisible/wisible.request.model"
import { traceWrapperAsync } from "../util/tracer"

import { SendToExternalProcessor } from "./processor"

const {
  wisibleApiUrl: WISIBLE_API_URL,
  wisibleApiKey: WISIBLE_API_KEY,
  wisibleCookie: WISIBLE_COOKIE,
} = config

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
  const headers = {
    "x-api-key": WISIBLE_API_KEY,
    "Content-Type": "application/json",
    Cookie: WISIBLE_COOKIE,
  }

  await traceWrapperAsync(
    async () => {
      await axios.post(WISIBLE_API_URL, request, { headers }).then((res) => {
        console.log(JSON.stringify(res.data))

        if (JSON.stringify(res.data).indexOf("done") !== -1) {
          return Promise.resolve("success")
        } else {
          return Promise.resolve("error: " + JSON.stringify(res.data) + " status is " + res.status)
        }
      })
    },
    "external",
    "sendToWisibleApi",
    true
  )
}
