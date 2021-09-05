import { CertificateType, Patient } from "../../patient/patient.model"
import { ColinkRequest } from "../colink.request.model"

export function colinkRequestFromPatient(patient: Patient): ColinkRequest {
  return {
    sex_id: patient.gender,
    firstname: patient.name,
    lastname: patient.surname,
    age: patient.ageYear,
    cid:
      patient.certificateType === CertificateType.PersonalId
        ? patient.certificateId
        : "",
    passport:
      patient.certificateType === CertificateType.Passport
        ? patient.certificateId
        : "",
    contact_number: patient.patientPhone ?? "",
    inspected_location: undefined,
    inspected_location_type: undefined,
    inspected_location_owner: undefined,
    swab_datetime: patient.medicalInfo?.isRtPcrPositive
      ? patient.medicalInfo?.labTestWhen
      : undefined,
    result_ack_datetime: patient.medicalInfo?.isAtkPositive
      ? patient.medicalInfo?.labTestWhen
      : undefined,
    bed_waiting_days: undefined,
    cd_1: patient.medicalInfo?.isDiseaseUncontrollDm ?? false, // ??? Cannot map
    cd_2: patient.medicalInfo?.isDiseaseCancer ?? false,
    cd_3: patient.medicalInfo?.isDiseaseCopd ?? false,
    cd_4: patient.medicalInfo?.isDiseaseAsthma ?? false,
    cd_5: patient.medicalInfo?.isDiseaseObesity ?? false,
    cd_6: patient.medicalInfo?.isDiseaseCkdLevelHigherThanFour ?? false,
    cd_7: patient.medicalInfo?.isDiseaseStrokeWithinSixMonth ?? false,
    cd_8: patient.medicalInfo?.isDiseaseCardioVascularDisease ?? false,
    cd_9: patient.medicalInfo?.isDiseaseHypertension ?? false,
    cd_10: patient.medicalInfo?.isDiseaseHyperlipidemia ?? false,
    cd_source: "",
    weight: patient.weightKg,
    high: patient.heightCm,
    bmi: undefined,
    cl_1: patient.medicalInfo?.isSymptomShortnessOfBreath ?? false,
    cl_2: patient.medicalInfo?.isSymptomFever ?? false,
    cl_3: patient.medicalInfo?.isSymptomCough ?? false,
    cl_4: patient.medicalInfo?.isSymptomRunnyNose ?? false,
    cl_5: patient.medicalInfo?.isSymptomSoreThroat ?? false,
    cl_6: patient.medicalInfo?.isSymptomFatigue ?? false,
    cl_7: patient.medicalInfo?.isSymptomHeadAche ?? false,
    cl_8: patient.medicalInfo?.isSymptomDiarrhea ?? false,
    cl_9: patient.medicalInfo?.isSymptomLossOfSmell ?? false,
    cl_10: patient.medicalInfo?.isSymptomConjunctivitis ?? false,
    cl_11: patient.medicalInfo?.isSymptomRash ?? false,
    cl_12: patient.medicalInfo?.isSymptomLossOfTaste ?? false,
    cl_13: patient.medicalInfo?.isSymptomTiredness ?? false,
    cl_14: patient.medicalInfo?.isSymptomChestPain ?? false,
    cl_15: false,
    cl_source: "",
    screening_result_id: 0, //รอคัดกรอง
    latest_symptom: patient.medicalInfo?.symptoms,
    latest_follow_datetime: undefined,
    status: undefined,
    transfered_to: patient.admittedTo,
    hospital_admitted: patient.admittedTo,
    hospital_admitted_datetime: undefined,
    note: "",
    age_month: 0,
    transfer_method: undefined,
    address: `${patient.address?.building} ${patient.address?.village} ${patient.address?.moo} ${patient.address?.soi} ${patient.address?.road}`,
    subdistrict_code: patient.address?.subDistrictCode?.toString(),
    district_code: patient.address?.districtCode?.toString(),
    province_code: patient.address?.provinceCode?.toString(),
    nationality: undefined,
    address_zone: patient.address?.bangkokZoneCode?.toString(),
    test_type: undefined,
    hospital_admitted_other: undefined,
    favipiravir_receive_date: patient.medicalInfo?.receivedFavipiravirWhen,
    risk_score: patient.riskScore?.triage_score,
    daily_activity: undefined,
    pregnancy_week: patient.medicalInfo?.pregnancyWeeks,
    favipiravir_by: undefined,
    treatment_right: undefined,
  }
}
