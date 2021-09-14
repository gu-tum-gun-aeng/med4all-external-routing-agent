import {
  getOrElse,
  optGet,
  optGetOrElse,
  optIsDefined,
} from "../../../util/optional"
import { Patient } from "../../patient/patient.model"
import { SendToWisibleRequest } from "../wisible.request.model"

export function wisibleRequestFromPatient(
  patient: Patient
): SendToWisibleRequest {
  return {
    pipeline_name: pipeline(patient),
    nation_id: patient.certificateId,
    first_name: patient.name,
    last_name: patient.surname,
    weight: optGet(patient.weightKg),
    age: optGet(patient.ageYear),
    phone: optGet(patient.patientPhone),
    address: addressText(patient),
    subdistrict: optGet(patient.address?.subDistrictCode?.toString()),
    district: optGet(patient.address?.districtCode?.toString()),
    province: optGet(patient.address?.provinceCode?.toString()),
    zipcode: optGet(patient.address?.zipCode?.toString()),
    source: "Siriraj",
    bypass_screening: optGetOrElse<boolean, boolean>(
      patient.medicalInfo?.isBypassScreening,
      false
    ),
  }
}

export type Pipeline =
  | "ยาแพคเล็ก (นน<90)"
  | "ยาแพคใหญ่ (นน>90 OR BMI>30)"
  | "ยาคนท้อง โรคตับ เบาหวาน"
  | "ยาเด็ก"

export function pipeline(patient: Patient): Pipeline {
  if (optGet(patient.ageYear) < 15) {
    return "ยาเด็ก"
  } else if (
    getOrElse(patient.medicalInfo?.isPregnant, false) ||
    getOrElse(patient.medicalInfo?.isDiseaseUncontrolledDm, false) ||
    getOrElse(patient.medicalInfo?.isDiseaseCirrhosis, false)
  ) {
    return "ยาคนท้อง โรคตับ เบาหวาน"
  } else if (optGet(patient.weightKg) > 90) {
    // NO BMI calculated because Siriraj not provide Height
    return "ยาแพคใหญ่ (นน>90 OR BMI>30)"
  } else {
    return "ยาแพคเล็ก (นน<90)"
  }
}

function addressText(patient: Patient): string {
  return [
    patient.address?.moo,
    patient.address?.village,
    patient.address?.alley,
    patient.address?.soi,
    patient.address?.road,
  ]
    .filter(optIsDefined)
    .join(" ")
}
