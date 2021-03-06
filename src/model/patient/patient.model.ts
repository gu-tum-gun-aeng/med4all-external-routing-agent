export type Patient = {
  certificateId: string
  certificateType: CertificateType
  name: string
  surname: string
  gender?: number
  ageYear?: number
  patientPhone?: string
  custodianPhone?: string
  weightKg?: number
  heightCm?: number
  medicalInfo?: MedicalInfo
  checkInWhen?: string
  checkOutWhen?: string
  address?: Address
  patientDataSource?: number
  admittedTo?: string
  healthCoverage?: number
  lineId?: string
  homeTown?: number
  equipments?: string[]
  nhso_ticket_id?: string
  trustedSource?: string
  sourceName?: string
  riskScore?: RiskScore
}

export enum CertificateType {
  PersonalId = 0,
  Passport = 1,
  ForeignId = 2,
  NoDoc = 3,
}

export type MedicalInfo = {
  patientCovidClassificationColor?: number
  isAtkPositive?: boolean
  isRtPcrPositive?: boolean
  labTestWhen?: string
  isFavipiravirReceived?: boolean
  receivedFavipiravirWhen?: string
  bodyTemperatureCelsius?: number
  pulseRateBpm?: number
  oxygenSaturation?: number
  oxygenSaturationAfterExercise?: number
  oxygenSaturationDifference?: number
  systolic?: number
  diastolic?: number
  inspirationRate?: number
  isPregnant?: boolean
  pregnancyWeeks?: number
  isBedridden?: boolean
  symptoms?: string
  allergyToDrugs?: string[]
  allergyToFoods?: string[]
  isSymptomShortnessOfBreath?: boolean
  isSymptomFever?: boolean
  isSymptomCough?: boolean
  isSymptomRunnyNose?: boolean
  isSymptomSoreThroat?: boolean
  isSymptomFatigue?: boolean
  isSymptomHeadAche?: boolean
  isSymptomDiarrhea?: boolean
  isSymptomLossOfSmell?: boolean
  isSymptomConjunctivitis?: boolean
  isSymptomRash?: boolean
  isSymptomLossOfTaste?: boolean
  isSymptomTiredness?: boolean
  isSymptomChestPain?: boolean
  isSymptomPoorAppetite?: boolean
  isSymptomGi?: boolean
  isDiseaseUncontrolledDm?: boolean
  isDiseaseCancer?: boolean
  isDiseaseCopd?: boolean
  isDiseaseAsthma?: boolean
  isDiseaseObesity?: boolean
  isDiseaseCkdLevelHigherThanFour?: boolean
  isDiseaseStrokeWithinSixMonth?: boolean
  isDiseaseCardioVascularDisease?: boolean
  isDiseaseHiv?: boolean
  isDiseaseHypertension?: boolean
  isDiseaseHyperlipidemia?: boolean
  isDiseaseCirrhosis?: boolean
  isDiseaseTuberculosis?: boolean
  isDiseaseEsrd?: boolean
  vaccinationRecords?: string[]
  firstVaccinatedWhen?: string
  secondVaccinatedWhen?: string
  remark?: string
  firstSymptomWhen?: string
  isMedicineRequested?: boolean
  isBypassScreening?: boolean
  isBedRequested?: boolean
  isOxygenRequested?: boolean
}

export type Address = {
  addressDetail?: string
  province?: string
  district?: string
  subDistrict?: string
  moo?: string
  road?: string
  alley?: string
  soi?: string
  village?: string
  bangkokZone?: string
  zipCode?: number
  building?: string
  note?: string
}

export enum GenderCode {
  male = 1,
  female = 2,
  notApplicable = 9,
}

export type RiskScore = {
  inclusionLabel: string
  inclusionLabelType: string
  triageScore: number
}
