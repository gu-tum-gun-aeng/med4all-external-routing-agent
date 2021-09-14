import { CertificateType, Patient } from "../../patient/patient.model"
import { PedRequest } from "../ped.request.model"

export function pedRequestFromPatient(patient: Patient): PedRequest {
  return {
    certificateId: patient.certificateId,
    certificateType: mappingCertificateType(patient.certificateType),
    name: patient.name,
    surname: patient.surname,
    gender: patient.gender,
    ageYear: patient.ageYear,
    patientPhone: patient.patientPhone,
    custodianPhone: patient.custodianPhone,
    weightKg: patient.weightKg,
    heightCm: patient.heightCm,

    medicalInfoPatientCovidClassificationColor:
      patient.medicalInfo?.patientCovidClassificationColor,
    medicalInfoIsAtkPositive: patient.medicalInfo?.isAtkPositive,
    medicalInfoIsRtPcrPositive: patient.medicalInfo?.isRtPcrPositive,
    medicalInfoLabTestWhen: patient.medicalInfo?.labTestWhen,
    medicalInfoIsFavipiravirReceived:
      patient.medicalInfo?.isFavipiravirReceived,
    medicalInfoReceivedFavipiravirWhen:
      patient.medicalInfo?.receivedFavipiravirWhen,
    medicalInfoBodyTemperatureCelsius:
      patient.medicalInfo?.bodyTemperatureCelsius,
    medicalInfoPulseRateBpm: patient.medicalInfo?.pulseRateBpm,
    medicalInfoOxygenSaturation: patient.medicalInfo?.oxygenSaturation,
    medicalInfoOxygenSaturationAfterExercise:
      patient.medicalInfo?.oxygenSaturationAfterExercise,
    medicalInfoOxygenSaturationDifference:
      patient.medicalInfo?.oxygenSaturationDifference,
    medicalInfoSystolic: patient.medicalInfo?.systolic,
    medicalInfoDiastolic: patient.medicalInfo?.diastolic,
    medicalInfoInspirationRate: patient.medicalInfo?.inspirationRate,
    medicalInfoIsPregnant: patient.medicalInfo?.isPregnant,
    medicalInfoPregnancyWeeks: patient.medicalInfo?.pregnancyWeeks,
    medicalInfoIsBedridden: patient.medicalInfo?.isBedridden,
    medicalInfoSymptoms: patient.medicalInfo?.symptoms,
    medicalInfoAllergyToDrugs: patient.medicalInfo?.allergyToDrugs,
    medicalInfoAllergyToFoods: patient.medicalInfo?.allergyToFoods,
    medicalInfoIsSymptomShortnessOfBreath:
      patient.medicalInfo?.isSymptomShortnessOfBreath,
    medicalInfoIsSymptomFever: patient.medicalInfo?.isSymptomFever,
    medicalInfoIsSymptomCough: patient.medicalInfo?.isSymptomCough,
    medicalInfoIsSymptomRunnyNose: patient.medicalInfo?.isSymptomRunnyNose,
    medicalInfoIsSymptomSoreThroat: patient.medicalInfo?.isSymptomSoreThroat,
    medicalInfoIsSymptomFatigue: patient.medicalInfo?.isSymptomFatigue,
    medicalInfoIsSymptomHeadAche: patient.medicalInfo?.isSymptomHeadAche,
    medicalInfoIsSymptomDiarrhea: patient.medicalInfo?.isSymptomDiarrhea,
    medicalInfoIsSymptomLossOfSmell: patient.medicalInfo?.isSymptomLossOfSmell,
    medicalInfoIsSymptomConjunctivitis:
      patient.medicalInfo?.isSymptomConjunctivitis,
    medicalInfoIsSymptomRash: patient.medicalInfo?.isSymptomRash,
    medicalInfoIsSymptomLossOfTaste: patient.medicalInfo?.isSymptomLossOfTaste,
    medicalInfoIsSymptomTiredness: patient.medicalInfo?.isSymptomTiredness,
    medicalInfoIsSymptomChestPain: patient.medicalInfo?.isSymptomChestPain,
    medicalInfoIsSymptomPoorAppetite: patient.medicalInfo?.isSymptomGi,
    medicalInfoIsSymptomGi: patient.medicalInfo?.isSymptomGi,
    medicalInfoIsDiseaseUncontrolledDm:
      patient.medicalInfo?.isDiseaseUncontrolledDm,
    medicalInfoIsDiseaseCancer: patient.medicalInfo?.isDiseaseCancer,
    medicalInfoIsDiseaseCopd: patient.medicalInfo?.isDiseaseCopd,
    medicalInfoIsDiseaseAsthma: patient.medicalInfo?.isDiseaseAsthma,
    medicalInfoIsDiseaseObesity: patient.medicalInfo?.isDiseaseObesity,
    medicalInfoIsDiseaseCkdLevelHigherThanFour:
      patient.medicalInfo?.isDiseaseCkdLevelHigherThanFour,
    medicalInfoIsDiseaseStrokeWithinSixMonth:
      patient.medicalInfo?.isDiseaseStrokeWithinSixMonth,
    medicalInfoIsDiseaseCardioVascularDisease:
      patient.medicalInfo?.isDiseaseCardioVascularDisease,
    medicalInfoIsDiseaseHiv: patient.medicalInfo?.isDiseaseHiv,
    medicalInfoIsDiseaseHypertension:
      patient.medicalInfo?.isDiseaseHypertension,
    medicalInfoIsDiseaseHyperlipidemia:
      patient.medicalInfo?.isDiseaseHyperlipidemia,
    medicalInfoIsDiseaseCirrhosis: patient.medicalInfo?.isDiseaseCirrhosis,
    medicalInfoIsDiseaseTuberculosis:
      patient.medicalInfo?.isDiseaseTuberculosis,
    medicalInfoIsDiseaseEsrd: patient.medicalInfo?.isDiseaseEsrd,
    medicalInfoVaccinationRecords: patient.medicalInfo?.vaccinationRecords,
    medicalInfoFirstVaccinatedWhen: patient.medicalInfo?.firstVaccinatedWhen,
    medicalInfoSecondVaccinatedWhen: patient.medicalInfo?.secondVaccinatedWhen,
    medicalInfoRemark: patient.medicalInfo?.remark,
    medicalInfoFirstSymptomWhen: patient.medicalInfo?.firstSymptomWhen,
    medicalInfoIsMedicineRequested: patient.medicalInfo?.isMedicineRequested,
    medicalInfoIsBypassScreening: patient.medicalInfo?.isBypassScreening,
    medicalInfoIsBedRequested: patient.medicalInfo?.isBedRequested,
    medicalInfoIsOxygenRequested: patient.medicalInfo?.isOxygenRequested,

    checkInWhen: patient.checkInWhen,
    checkOutWhen: patient.checkOutWhen,

    addressDetail: patient.address?.addressDetail,
    addressProvince: patient.address?.province,
    addressDistrict: patient.address?.district,
    addressSubDistrict: patient.address?.subDistrict,
    addressMoo: patient.address?.moo,
    addressRoad: patient.address?.road,
    addressAlley: patient.address?.alley,
    addressSoi: patient.address?.soi,
    addressVillage: patient.address?.village,
    addressBangkokZone: patient.address?.bangkokZone,
    addressZipCode: patient.address?.zipCode,
    addressBuilding: patient.address?.building,
    addressNote: patient.address?.note,

    patientDataSource: patient.patientDataSource,
    admittedTo: patient.admittedTo,
    healthCoverage: patient.healthCoverage,
    lineId: patient.lineId,
    homeTown: patient.homeTown,
    equipments: patient.equipments,
    nhso_ticket_id: patient.nhso_ticket_id,
    trustedSource: patient.trustedSource,

    riskScoreInclusionLabel: patient.riskScore?.inclusionLabel,
    riskScoreInclusionLabelType: patient.riskScore?.inclusionLabelType,
    riskScoreTriageScore: patient.riskScore?.triageScore,
  }
}

const mappingCertificateType = (certType: CertificateType): string => {
  if (certType === CertificateType.ForeignId) {
    return "foreign"
  } else if (certType === CertificateType.NoDoc) {
    return "noDoc"
  } else if (certType === CertificateType.Passport) {
    return "passport"
  } else {
    return "personalId"
  }
}
