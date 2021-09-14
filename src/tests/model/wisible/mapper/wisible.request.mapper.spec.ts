import sinon from "sinon"

import {
  CertificateType,
  Patient,
} from "../../../../model/patient/patient.model"
import {
  pipeline,
  Pipeline,
} from "../../../../model/wisible/mapper/wisible.request.mapper"

afterEach(() => {
  sinon.restore()
})

test("wisible.request.mapper; given patient mock with age < 15 when call pipeline then pipeline is 'ยาเด็ก'", async () => {
  const mockPatient: Patient = {
    certificateId: "0123456789123",
    certificateType: CertificateType.PersonalId,
    name: "John",
    surname: "Doe",
    weightKg: 60,
    ageYear: 14,
    patientPhone: "0812223333",
    address: {
      subDistrict: "someSubDistrict",
      district: "someSubDistrict",
      province: "someSubDistrict",
      zipCode: 4,
    },
  }

  const expectedPipeline: Pipeline = "ยาเด็ก"
  expect(pipeline(mockPatient)).toBe(expectedPipeline)
})

test("wisible.request.mapper; given patient mock with isPregnant=true when call pipeline then pipeline is 'ยาคนท้อง โรคตับ เบาหวาน'", async () => {
  const mockPatient: Patient = {
    certificateId: "0123456789123",
    certificateType: CertificateType.PersonalId,
    name: "John",
    surname: "Doe",
    weightKg: 60,
    ageYear: 16,
    patientPhone: "0812223333",
    address: {
      subDistrict: "someSubDistrict",
      district: "someSubDistrict",
      province: "someSubDistrict",
      zipCode: 4,
    },
    medicalInfo: {
      isPregnant: true,
    },
  }

  const expectedPipeline: Pipeline = "ยาคนท้อง โรคตับ เบาหวาน"
  expect(pipeline(mockPatient)).toBe(expectedPipeline)
})

test("wisible.request.mapper; given patient mock with isDiseaseUncontrolledDm=true when call pipeline then pipeline is 'ยาคนท้อง โรคตับ เบาหวาน'", async () => {
  const mockPatient: Patient = {
    certificateId: "0123456789123",
    certificateType: CertificateType.PersonalId,
    name: "John",
    surname: "Doe",
    weightKg: 60,
    ageYear: 16,
    patientPhone: "0812223333",
    address: {
      subDistrict: "someSubDistrict",
      district: "someSubDistrict",
      province: "someSubDistrict",
      zipCode: 4,
    },
    medicalInfo: {
      isDiseaseUncontrolledDm: true,
    },
  }

  const expectedPipeline: Pipeline = "ยาคนท้อง โรคตับ เบาหวาน"
  expect(pipeline(mockPatient)).toBe(expectedPipeline)
})

test("wisible.request.mapper; given patient mock with isDiseaseCirrhosis=true when call pipeline then pipeline is 'ยาคนท้อง โรคตับ เบาหวาน'", async () => {
  const mockPatient: Patient = {
    certificateId: "0123456789123",
    certificateType: CertificateType.PersonalId,
    name: "John",
    surname: "Doe",
    weightKg: 60,
    ageYear: 16,
    patientPhone: "0812223333",
    address: {
      subDistrict: "someSubDistrict",
      district: "someSubDistrict",
      province: "someSubDistrict",
      zipCode: 4,
    },
    medicalInfo: {
      isDiseaseCirrhosis: true,
    },
  }

  const expectedPipeline: Pipeline = "ยาคนท้อง โรคตับ เบาหวาน"
  expect(pipeline(mockPatient)).toBe(expectedPipeline)
})

test("wisible.request.mapper given patient mock with weightKg > 90 when call pipeline then pipeline is 'ยาแพคใหญ่ (นน>90 OR BMI>30)'", async () => {
  const mockPatient: Patient = {
    certificateId: "0123456789123",
    certificateType: CertificateType.PersonalId,
    name: "John",
    surname: "Doe",
    weightKg: 91,
    ageYear: 20,
    patientPhone: "0812223333",
    address: {
      subDistrict: "someSubDistrict",
      district: "someSubDistrict",
      province: "someSubDistrict",
      zipCode: 4,
    },
  }

  const expectedPipeline: Pipeline = "ยาแพคใหญ่ (นน>90 OR BMI>30)"
  expect(pipeline(mockPatient)).toBe(expectedPipeline)
})

test("wisible.request.mapper given patient mock with age>=15, weight<=90 and all of isPregnant, isDiseaseUncontrolledDm, isDiseaseCirrhosis are false when call pipeline then pipeline is 'ยาแพคเล็ก (นน<90)'", async () => {
  const mockPatient: Patient = {
    certificateId: "0123456789123",
    certificateType: CertificateType.PersonalId,
    name: "John",
    surname: "Doe",
    weightKg: 60,
    ageYear: 20,
    patientPhone: "0812223333",
    address: {
      subDistrict: "someSubDistrict",
      district: "someSubDistrict",
      province: "someSubDistrict",
      zipCode: 4,
    },
  }

  const expectedPipeline: Pipeline = "ยาแพคเล็ก (นน<90)"
  expect(pipeline(mockPatient)).toBe(expectedPipeline)
})
