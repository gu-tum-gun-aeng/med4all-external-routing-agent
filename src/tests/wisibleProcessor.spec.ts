import axios, { AxiosResponse } from "axios"
import sinon from "sinon"

import { CertificateType, Patient } from "../model/patient/patient.model"
import WisibleProcessor from "../processor/wisibleProcessor"

afterEach(() => {
  sinon.restore()
})

test("wisibleProcessor.processMessage should call axios.post once", async () => {
  const axiosStub = sinon.stub(axios, "post")

  const res: AxiosResponse = {
    status: 200,
    data: JSON.stringify({
      result: "",
      ref: 0,
    }),
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
    weightKg: 60,
    ageYear: 14,
    patientPhone: "0812223333",
    address: {
      subDistrictCode: 1,
      districtCode: 2,
      provinceCode: 3,
      zipCode: 4,
    },
  }

  await new WisibleProcessor().processMessage(JSON.stringify(mockPatient))

  expect(axiosStub.callCount).toBe(1)
})

// TODO: handle case wisible error 400, as below

// test("wisibleProcessor.processMessage when axios.post return 400 should throw error", async () => {
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
//     new WisibleProcessor().processMessage(JSON.stringify(mockPatient))
//   ).rejects.toThrow("error")
// })
