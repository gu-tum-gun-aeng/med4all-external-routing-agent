import axios, { AxiosResponse } from "axios"
import sinon from "sinon"

import { CertificateType, Patient } from "../model/patient/patient.model"
import ColinkProcessor from "../processor/colinkProcessor"

afterEach(() => {
  sinon.restore()
})

test("colinkProcessor.processMessage should call axios.post once", async () => {
  const axiosStub = sinon.stub(axios, "post")

  const res: AxiosResponse = {
    status: 200,
    data: "success",
    headers: {},
    statusText: "success",
    config: axios.defaults,
  }

  axiosStub.returns(Promise.resolve(res))

  const mockPatient: Patient = {
    certificateId: "0123456789123",
    certificateType: CertificateType.PersonalId,
    name: "John",
    surname: "Doe",
  }

  await new ColinkProcessor().processMessage(JSON.stringify(mockPatient))

  expect(axiosStub.callCount).toBe(1)
})

// TODO: handle case colink error 400, as below

// test("colinkProcessor.processMessage when axios.post return 400 should throw error", async () => {
//   const axiosStub = sinon.stub(axios, "post")

//   const res: AxiosResponse = {
//     status: 400,
//     data: "failed",
//     headers: {},
//     statusText: "failed",
//     config: axios.defaults,
//   }

//   axiosStub.returns(Promise.resolve(res))

//   const mockPatient: Patient = {
//     certificateId: "0123456789123",
//     certificateType: CertificateType.PersonalId,
//     name: "John",
//     surname: "Doe",
//   }

//   expect(
//     new ColinkProcessor().processMessage(JSON.stringify(mockPatient))
//   ).rejects.toThrow("error")
// })
