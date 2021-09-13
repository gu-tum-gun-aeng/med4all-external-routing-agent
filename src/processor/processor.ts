import { TOPIC } from "../constants"
import { Patient } from "../model/patient/patient.model"
import messageQueue from "../util/messageQueue"

export class ParallelProcessConsumer {
  async consume(process: Processor[]) {
    await messageQueue.consume(TOPIC.PATIENT_WITH_RISK_SCORE_MAIN, (message) =>
      this.parallelProcessMessage(message, process)
    )
  }

  async parallelProcessMessage(message: string, process: Processor[]) {
    try {
      await Promise.all(
        process.map(async (processor) => processor.processMessage(message))
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
