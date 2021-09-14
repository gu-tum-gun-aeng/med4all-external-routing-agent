import { TOPIC } from "../constants"
import { Patient } from "../model/patient/patient.model"
import messageQueue from "../util/messageQueue"

export class ParallelProcessConsumer {
  processors: SendToExternalProcessor[]

  constructor(processors: SendToExternalProcessor[]) {
    this.processors = processors
  }

  async consume() {
    await messageQueue.consume(
      TOPIC.PATIENT_WITH_RISK_SCORE_MAIN,
      this.parallelProcessMessage
    )
  }

  parallelProcessMessage = async (message: string) => {
    try {
      const patientData: Patient = JSON.parse(message)
      let processors: SendToExternalProcessor[] = []

      if (
        patientData.medicalInfo?.isBedRequested ||
        patientData.medicalInfo?.isOxygenRequested
      ) {
        processors = [this.processors[1]]
      } else {
        processors = [this.processors[0]]
      }

      await Promise.all(
        processors.map(async (processor) => processor.processMessage(message))
      )
    } catch (error) {
      console.log(error)
      await messageQueue.publish(TOPIC.PATIENT_WITH_RISK_SCORE_DLQ, message)
    }
  }
}

export abstract class Processor {
  abstract processMessage(message: string): Promise<void>
}

export abstract class SendToExternalProcessor extends Processor {
  async processMessage(message: string) {
    const patientData: Patient = JSON.parse(message)

    await this.sendToExternal(patientData)
  }

  abstract sendToExternal(patient: Patient): Promise<void>
}
