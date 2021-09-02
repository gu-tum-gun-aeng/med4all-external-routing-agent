
export type ColinkRequest = {
  sex: string;
  firstname: string;
  lastname: string;
  age: number;
  cid: string;
  passport: string;
  contact_number: string;
  district: string;
  province: string;
  inspected_location: string;
  inspected_location_type: string;
  inspected_location_owner: string;
  swab_datetime: string;
  result_ack_datetime: string;
  bed_waiting_days: string;
  cd_1: string;
  cd_2: string;
  cd_3: string;
  cd_4: string;
  cd_5: string;
  cd_6: string;
  cd_7: string;
  cd_8: string;
  cd_9: string;
  cd_10: string;
  cd_source: string;
  weight: string;
  high: string;
  bmi: string;
  cl_1: string;
  cl_2: string;
  cl_3: string;
  cl_4: string;
  cl_5: string;
  cl_6: string;
  cl_7: string;
  cl_8: string;
  cl_9: string;
  cl_10: string;
  cl_11: string;
  cl_12: string;
  cl_13: string;
  cl_14: string;
  cl_15: string;
  cl_source: string;
  screening_result: string;
  latest_symptom: string;
  latest_follow_datetime: string;
  status: string;
  transfered_to: string;
  hospital_admitted: string;
  hospital_admitted_datetime: string;
  gbdi_created_datetime: string;
  gbdi_created_user: string;
  gbdi_updated_datetime: string;
  gbdi_updated_user: string;
  note: string;
  age_month: string;
  transfer_method: string;
  gbdi_imported_datetime: string;
  address: string;
  subdistrict_code: string;
  district_code: string;
  province_code: string;
  nationality: string;
  address_zone: string;
  test_type: string;
  hospital_admitted_other: string;
  favipiravir_receive_date: string;
  risk_score: string;
  cd_11: string;
  cd_12: string;
  cd_13: string;
  cd_14: string;
  cd_15: string;
  cd_16: string;
  daily_activity: string;
  dialysis: string;
  pregnancy_week: string;
  favipiravir_by: string;
  treatment_right: string;
}


/*
sex	character varying(10)	NULL	เพศ 
firstname	character varying(100)	NOT NULL	ชื่อผู้ป่วย 
lastname	character varying(100)	NOT NULL	นามสกุลผู้ป่วย
age	smallint(16)	NULL	อายุผู้ป่วย
cid	character varying(13)	NOT NULL	รหัสบัตรประชาชน
passport	character varying(50)	NOT NULL	เลข passport
contact_number	character varying(100)	NOT NULL	เบอร์ติดต่อของผู้ป่วย
district	character varying(200)	NULL	อำเภอ/เขต
province	character varying(50)	NULL	จังหวัด
inspected_location	character varying(200)	NULL	ชื่อสถานที่ตรวจหาเชื้อ covid-19 
inspected_location_type	character varying(50)	NULL	ประเภทของสถานที่ตรวจหาเชื้อ covid-19 (ปัจจุบันไม่ใช้แล้ว)
inspected_location_owner	character varying(50)	NULL	สังกัดของสถานที่ตรวจหาเชื้อ covid-19 เช่น เอกชน, กทม., กรมการแพทย์
swab_datetime	timestamp without time zone(6)	NULL	วันที่ swab 
result_ack_datetime	timestamp without time zone(6)	NULL	วันที่ทราบผลตรวจ covid-19
bed_waiting_days	smallint(16)	NULL	จำนวนวันที่รอเตียง 
cd_1	boolean	NULL	เบาหวานที่ควบคุมไม่ได้ (Uncontrol DM)
cd_2	boolean	NULL	มะเร็งระหว่างการรักษา
cd_3	boolean	NULL	ปอดอุดตันเรื้อรัง (COPD)
cd_4	boolean	NULL	หอบหืด (Asthma)
cd_5	boolean	NULL	อ้วน (น้ำหนัก > 90 กิโลกรัม หรือ BMI > 30)
cd_6	boolean	NULL	ไตวายเรื้อรังระยะที่ 4 (CKD stage 4)
cd_7	boolean	NULL	เกิดโรคหลอดเลือดสมองภายใน 6 เดือนนี้
cd_8	boolean	NULL	โรคหัวใจหลอดเลือด
cd_9	boolean	NULL	ความดันโลหิตสูง
cd_10	boolean	NULL	ไขมันในเลือดสูง
cd_source	character varying(1000)	NULL	โรคประจำตัวอื่นๆ 
weight	double precision(53)	NULL	น้ำหนัก
high	double precision(53)	NULL	ส่วนสูง
bmi	double precision(53)	NULL	BMI ของผู้ป่วย
cl_1	boolean	NULL	หายใจติดขัด หรือ หายใจลำบาก
cl_2	boolean	NULL	ไข้
cl_3	boolean	NULL	ไอ
cl_4	boolean	NULL	น้ำมูกไหล
cl_5	boolean	NULL	เจ็บคอ
cl_6	boolean	NULL	เมื่อยเนื้อเมื่อยตัว
cl_7	boolean	NULL	ปวดศีรษะ
cl_8	boolean	NULL	ถ่ายเหลว
cl_9	boolean	NULL	จมูกไม่ได้กลิ่น
cl_10	boolean	NULL	ตาแดง
cl_11	boolean	NULL	มีผื่นคัน
cl_12	boolean	NULL	ลิ้นไม่รู้รส
cl_13	boolean	NULL	หอบเหนื่อย
cl_14	boolean	NULL	แน่นหน้าอก
cl_15	boolean	NULL	(ช่องที่เตรียมไว้สำหรับอาการเบื้องต้น) 
cl_source	character varying(1000)	NULL	อาการเบื้องต้นอื่นๆ 
screening_result	character varying(20)	NULL	ผลการคัดกรองเบื้องต้น (รอคัดกรอง, ขาว, เขียว, เหลือง, แดง)
latest_symptom	character varying(100)	NULL	อาการล่าสุด เช่น F/U ขาว, F/U เหลือง, ติดต่อไม่ได้, ปิดเคส
latest_follow_datetime	timestamp without time zone(6)	NULL	วันที่ติดตามล่าสุด
status	character varying(100)	NULL	สถานะเคส เช่น รอเตียง (ศูนย์ติดตามเยี่ยม), รับเคส, ปฎิเสธ Admit 
transfered_to	character varying(100)	NULL	ส่งไปที่ไหน เช่น เอกชน, กทม., มหาวิทยาลัยแพทย์ 
hospital_admitted	character varying(200)	NULL	ชื่อ รพ. ที่ส่งไป 
hospital_admitted_datetime	timestamp without time zone(6)	NULL	วันที่ส่งไป รพ. 
gbdi_created_datetime	timestamp without time zone(6)	NULL	วันที่สร้างข้อมูล 
gbdi_created_user	character varying(60)	NULL	สร้างโดย (ผู้ที่สร้างข้อมูล)  
gbdi_updated_datetime	timestamp without time zone(6)	NULL	วันที่อัปเดตข้อมูล 
gbdi_updated_user	character varying(60)	NULL	อัปเดตโดย (ผู้ที่อัปเดตข้อมูล)
note	character varying(2500)	NULL	หมายเหตุ
age_month	smallint(16)	NULL	อายุ (เดือน) 
transfer_method	character varying(50)	NULL	การรับส่ง เช่น เดินทางเอง, รถ สพฉ. 
gbdi_imported_datetime	character varying(26)	NULL	วันที่ลงข้อมูลในระบบ 
address	character varying(500)	NULL	ที่อยู่ 
subdistrict_code	character varying(6)	NULL	รหัสตำบล/แขวง
district_code	character varying(4)	NULL	รหัสอำเภอ/เขต
province_code	character varying(2)	NULL	รหัสจังหวัด
nationality	character varying(50)	NULL	สัญชาติ
address_zone	character varying(50)	NULL	bangkok zone
test_type	character varying(10)	NULL	ประเภทการตรวจ
hospital_admitted_other	character varying(200)	NULL	โรงพยาบาลที่ Admit อื่นๆ ที่ไม่พบใน dropdown
favipiravir_receive_date	timestamp without time zone(6)	NULL	วันที่ได้รับยา favipiravir
risk_score	integer(32)	NULL	คะแนนความเสี่ยง
cd_11	boolean	NULL	ตับแข็ง
cd_12	boolean	NULL	วัณโรค
cd_13	boolean	NULL	HIV
cd_14	boolean	NULL	จิตเวช
cd_15	boolean	NULL	ตั้งครรภ์
cd_16	boolean	NULL	พิการ
daily_activity	character varying(50)	NULL	การทำกิจวัตรประจำวัน
dialysis	boolean	NULL	ฟอกไตหรือไม่
pregnancy_week	smallint(16)	NULL	อายุครรภ์(รายสัปดาห์)
favipiravir_by	character varying(200)	NULL	รับยา Favipiravir โดย
treatment_right	character varying(200)	NULL	สิทธิ์การรักษา
*/