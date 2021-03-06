import sinon from "sinon"

import { Patient } from "../model/patient/patient.model"
import {
  ParallelProcessConsumer,
  Processor,
  SendToExternalProcessor,
} from "../processor/processor"
import messageQueue from "../util/messageQueue"

test("ParallelProcessConsumer.parallelProcessMessage when any processor throw error should call messageQueue.publish once", async () => {
  const processors = [
    ...Array(10).fill(new DoNothingProcessor()),
    ...Array(10).fill(new FailedProcessor()),
  ]

  const messageQueueStub = sinon.stub(messageQueue, "publish")
  messageQueueStub.returns(Promise.resolve())

  await new ParallelProcessConsumer(processors).parallelProcessMessage(
    "This message won't even be read."
  )

  expect(messageQueueStub.callCount).toBe(1)
})

test("SendToExternalProcessor.processMessage when given json string should call sendToExternal once", async () => {
  await new SendToExternalCounterProcessor().processMessage("{}")

  expect(counter).toBe(1)
})

test("SendToExternalProcessor.processMessage when given non json string should throw error", async () => {
  expect(
    new SendToExternalCounterProcessor().processMessage(
      "This message is not a valid json string @#$%^&*()"
    )
  ).rejects.toThrow("Unexpected token")
})

let counter = 0

class DoNothingProcessor extends Processor {
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  async processMessage(_message: string): Promise<void> {}
}

class FailedProcessor extends Processor {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async processMessage(_message: string): Promise<void> {
    throw new Error("I'm PANICKING")
  }
}

class SendToExternalCounterProcessor extends SendToExternalProcessor {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async sendToExternal(_patient: Patient): Promise<void> {
    counter = counter + 1
  }
}

afterEach(() => {
  counter = 0
  sinon.restore()
})
