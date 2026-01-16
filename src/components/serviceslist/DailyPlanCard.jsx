import BookingCalendar from "@/components/BookingCalendar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function DailyPlanCard (){
    return (
    <div className="flex items-center w-[100%] mt-8 bg-white rounded-2xl shadow-2xs p-4 grid grid-cols-1 md:grid-cols-2">
         {/* <!-- Heading --> */}

            {/* <!-- IMAGE --> */}
            <div className="bg-gray-50 flex items-center justify-center overflow-hidden">
              <img 
                src="../public/images/caregiver-daily.jpg"
                alt="Service Image" 
                className="w-full object-contain rounded-2xl shadow-2xs"
              />
            </div>

            {/* <!-- CONTENT --> */}
            <div className="p-4 flex flex-col justify-between">
              
              <div>
                <h1 className="text-3xl font-bold mt-2 text-gray-700">
                  บริการดูแลผู้สูงอายุ รายวัน
                </h1>

                <p className="text-gray-700 mt-4 ">
                    เหมาะสำหรับครอบครัวที่ต้องการผู้ดูแลในช่วงเวลาสั้น ๆ หรือเป็นบางวัน
                    ดูแลสุขอนามัย การรับประทานอาหาร การใช้ชีวิตประจำวัน และดูแลอย่างใกล้ชิดด้วยความเอาใจใส่ อบอุ่นเสมือนคนในครอบครัว      
                </p>

                <div className="mt-4">
                  <HoverCard>
                      <HoverCardTrigger className="text-blue-400">อ่านเพิ่มเติม</HoverCardTrigger>
                      <HoverCardContent>
                        ติดต่อล่วงหน้าอย่างน้อย 6 ชั่วโมง <br/>เพื่อให้เราจัดเตรียมการดูแลที่เหมาะสมกับความต้องการของท่านได้อย่างเต็มที่ บริการนี้เหมาะสำหรับผู้ที่ต้องการการดูแลผู้ป่วยชราภาพคราวหลังการเจ็บป่วยหรือผ่าตัด หรือในช่วงเวลาที่ผู้ดูแลหลักต้องการพักผ่อน
                      </HoverCardContent>
                    </HoverCard>
              </div>

              <div className="mt-6">
                <div className="flex w-full justify-evenly">
                 <BookingCalendar />
                </div>
              </div>
            </div>
       </div>
    </div>
    );
}