import axios from "axios"

import config from "../config"
import { Patient } from "../model/patient/patient.model"
import { pedRequestFromPatient } from "../model/ped/mapper/ped.request.mapper"
import { PedRequest } from "../model/ped/ped.request.model"
import { traceWrapperAsync } from "../util/tracer"

import { SendToExternalProcessor } from "./processor"

const { pedUrl: PED_URL } = config

export default class PedProcessor extends SendToExternalProcessor {
  async sendToExternal(patient: Patient): Promise<void> {
    const pedRequest = pedRequestFromPatient(patient)
    sendToPedApi(pedRequest)
  }
}

async function sendToPedApi(request: PedRequest): Promise<void> {
  const headers = {
    "Content-Type": "application/json",
  }

  await traceWrapperAsync(
    async () => {
      await axios.post(PED_URL, request, { headers }).then((res) => {
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
    "sendToPedApi",
    true
  )
}
