import axios from "axios"
import sinon from "sinon"

import { CertificateType, Patient } from "../model/patient/patient.model"
import colinkProcessor from "../processor/colinkProcessor"
import messageQueue from "../util/messageQueue"

afterEach(() => {
  sinon.restore()
})

test("colinkProcessor.processMessage should call axios.post once", async () => {
  const axiosStub = sinon.stub(axios, "post")

  axiosStub.returns(Promise.resolve({ result: "success" }))

  const mockPatient: Patient = {
    certificateId: "0123456789123",
    certificateType: CertificateType.PersonalId,
    name: "John",
    surname: "Doe",
  }

  await colinkProcessor.processMessage(JSON.stringify(mockPatient))

  expect(axiosStub.callCount).toBe(1)
})

test("colinkProcessor.processMessage should call messageQueue.publish once if axios.post return in failure", async () => {
  const axiosStub = sinon.stub(axios, "post")
  const messageQueueStub = sinon.stub(messageQueue, "publish")

  axiosStub.throws(new Error("Server not found"))
  messageQueueStub.returns(Promise.resolve())

  await colinkProcessor.processMessage("blahblah")

  expect(messageQueueStub.callCount).toBe(1)
})
