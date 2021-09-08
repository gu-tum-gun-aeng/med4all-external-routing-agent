import { TOPIC } from "../constants"
import { Patient } from "../model/patient/patient.model"
import messageQueue from "../util/messageQueue"

export class ParallelProcessConsumer {
  processors: Processor[]

  constructor(processors: Processor[]) {
    this.processors = processors
  }

  async consume() {
    await messageQueue.consume(
      TOPIC.PATIENT_WITH_RISK_SCORE_MAIN,
      this.parallelProcessMessage
    )
  }

  async parallelProcessMessage(message: string) {
    try {
      await Promise.all(
        this.processors.map(async (processor) =>
          processor.processMessage(message)
        )
      )
    } catch (error) {
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
