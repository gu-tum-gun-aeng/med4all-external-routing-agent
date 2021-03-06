export type PedRequest = {
  certificateId: string
  certificateType: string
  name: string
  surname: string
  gender?: number
  ageYear?: number
  patientPhone?: string
  custodianPhone?: string
  weightKg?: number
  heightCm?: number

  medicalInfoPatientCovidClassificationColor?: number
  medicalInfoIsAtkPositive?: boolean
  medicalInfoIsRtPcrPositive?: boolean
  medicalInfoLabTestWhen?: string
  medicalInfoIsFavipiravirReceived?: boolean
  medicalInfoReceivedFavipiravirWhen?: string
  medicalInfoBodyTemperatureCelsius?: number
  medicalInfoPulseRateBpm?: number
  medicalInfoOxygenSaturation?: number
  medicalInfoOxygenSaturationAfterExercise?: number
  medicalInfoOxygenSaturationDifference?: number
  medicalInfoSystolic?: number
  medicalInfoDiastolic?: number
  medicalInfoInspirationRate?: number
  medicalInfoIsPregnant?: boolean
  medicalInfoPregnancyWeeks?: number
  medicalInfoIsBedridden?: boolean
  medicalInfoSymptoms?: string
  medicalInfoAllergyToDrugs?: string[]
  medicalInfoAllergyToFoods?: string[]
  medicalInfoIsSymptomShortnessOfBreath?: boolean
  medicalInfoIsSymptomFever?: boolean
  medicalInfoIsSymptomCough?: boolean
  medicalInfoIsSymptomRunnyNose?: boolean
  medicalInfoIsSymptomSoreThroat?: boolean
  medicalInfoIsSymptomFatigue?: boolean
  medicalInfoIsSymptomHeadAche?: boolean
  medicalInfoIsSymptomDiarrhea?: boolean
  medicalInfoIsSymptomLossOfSmell?: boolean
  medicalInfoIsSymptomConjunctivitis?: boolean
  medicalInfoIsSymptomRash?: boolean
  medicalInfoIsSymptomLossOfTaste?: boolean
  medicalInfoIsSymptomTiredness?: boolean
  medicalInfoIsSymptomChestPain?: boolean
  medicalInfoIsSymptomPoorAppetite?: boolean
  medicalInfoIsSymptomGi?: boolean
  medicalInfoIsDiseaseUncontrolledDm?: boolean
  medicalInfoIsDiseaseCancer?: boolean
  medicalInfoIsDiseaseCopd?: boolean
  medicalInfoIsDiseaseAsthma?: boolean
  medicalInfoIsDiseaseObesity?: boolean
  medicalInfoIsDiseaseCkdLevelHigherThanFour?: boolean
  medicalInfoIsDiseaseStrokeWithinSixMonth?: boolean
  medicalInfoIsDiseaseCardioVascularDisease?: boolean
  medicalInfoIsDiseaseHiv?: boolean
  medicalInfoIsDiseaseHypertension?: boolean
  medicalInfoIsDiseaseHyperlipidemia?: boolean
  medicalInfoIsDiseaseCirrhosis?: boolean
  medicalInfoIsDiseaseTuberculosis?: boolean
  medicalInfoIsDiseaseEsrd?: boolean
  medicalInfoVaccinationRecords?: string[]
  medicalInfoFirstVaccinatedWhen?: string
  medicalInfoSecondVaccinatedWhen?: string
  medicalInfoRemark?: string
  medicalInfoFirstSymptomWhen?: string
  medicalInfoIsMedicineRequested?: boolean
  medicalInfoIsBypassScreening?: boolean
  medicalInfoIsBedRequested?: boolean
  medicalInfoIsOxygenRequested?: boolean

  checkInWhen?: string
  checkOutWhen?: string

  addressDetail?: string
  addressProvince?: string
  addressDistrict?: string
  addressSubDistrict?: string
  addressMoo?: string
  addressRoad?: string
  addressAlley?: string
  addressSoi?: string
  addressVillage?: string
  addressBangkokZone?: string
  addressZipCode?: number
  addressBuilding?: string
  addressNote?: string

  patientDataSource?: number
  admittedTo?: string
  healthCoverage?: number
  lineId?: string
  homeTown?: number
  equipments?: string[]
  nhso_ticket_id?: string
  trustedSource?: string

  riskScoreInclusionLabel?: string
  riskScoreInclusionLabelType?: string
  riskScoreTriageScore?: number
}
