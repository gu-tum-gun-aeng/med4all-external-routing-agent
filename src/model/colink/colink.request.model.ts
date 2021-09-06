export type ColinkRequest = {
  sex_id?: number
  firstname: string
  lastname: string
  age?: number
  cid?: string
  passport?: string
  contact_number: string
  inspected_location?: string
  inspected_location_type?: string
  inspected_location_owner?: string
  swab_datetime?: string
  result_ack_datetime?: string
  bed_waiting_days?: number
  cd_1: boolean
  cd_2: boolean
  cd_3: boolean
  cd_4: boolean
  cd_5: boolean
  cd_6: boolean
  cd_7: boolean
  cd_8: boolean
  cd_9: boolean
  cd_10: boolean
  cd_source?: string
  weight?: number
  high?: number
  bmi?: number
  cl_1: boolean
  cl_2: boolean
  cl_3: boolean
  cl_4: boolean
  cl_5: boolean
  cl_6: boolean
  cl_7: boolean
  cl_8: boolean
  cl_9: boolean
  cl_10: boolean
  cl_11: boolean
  cl_12: boolean
  cl_13: boolean
  cl_14: boolean
  cl_15: boolean
  cl_source?: string
  screening_result_id?: number
  latest_symptom?: string
  latest_follow_datetime?: string
  status?: string
  transfered_to?: string
  hospital_admitted?: string
  hospital_admitted_datetime?: string
  note?: string
  age_month?: number
  transfer_method?: string
  address?: string
  subdistrict_code?: string
  district_code?: string
  province_code?: string
  nationality?: string
  address_zone?: string
  test_type?: string
  hospital_admitted_other?: string
  favipiravir_receive_date?: string
  risk_score?: number
  daily_activity?: string
  pregnancy_week?: number
  favipiravir_by?: string
  treatment_right?: string
}

export type sendToColinkRequest = {
  record_count: number
  record_data: ColinkRequest[]
}
