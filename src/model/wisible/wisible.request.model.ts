export type SendToWisibleRequest = {
  pipeline_name: string
  nation_id: string
  first_name: string
  last_name: string
  weight: number
  age: number
  phone: string
  address: string
  subdistrict: string
  district: string
  province: string
  zipcode: string
  source: string
  bypass_screening: boolean
}
