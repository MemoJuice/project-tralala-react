import { Link } from "react-router"
import BookingCalendar from "@/components/BookingCalendar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function ServicesList (){
    return (
     <div className="min-h-full mx-4 md:mx-12 mt-12 mb- bg-white rounded-2xl shadow p-6 grid grid-cols-1 md:grid-cols-2 overflow-hidden">
         {/* <!-- Heading --> */}

            {/* <!-- IMAGE --> */}
            <div className="bg-gray-50 flex items-center justify-center overflow-hidden">
              <img 
                src="https://bucknerparkwayplace.org/wp-content/uploads/2023/03/What-Are-the-Duties-of-a-Respite-Caregiver.png"
                alt="Service Image" 
                className="w-full object-contain rounded-2xl shadow-2xs"
              />
            </div>

            {/* <!-- CONTENT --> */}
            <div className="p-4 flex flex-col justify-between">
              
              <div>
                <p className="tracking-widest text-gray-700 text-sm">SERVICE</p>

                <h1 className="text-3xl font-bold mt-2 text-gray-700">
                  บริการระยะสั้น
                </h1>

                <p className="text-gray-700 mt-4 leading-relaxed">
                  Short-term care services provide temporary support for individuals who need assistance after illness, surgery, or when the family caregiver needs a break. Our professional caregivers help with daily activities, personal care, medication reminders, and companionship to ensure safety and comfort at home.
                </p>

                <div className="mt-4">
                  <HoverCard>
                      <HoverCardTrigger className="text-blue-400">อ่านเพิ่มเติม</HoverCardTrigger>
                      <HoverCardContent>
                        ติดต่อล่วงหน้าอย่างน้อย 3 วัน <br/>เพื่อให้เราจัดเตรียมการดูแลที่เหมาะสมกับความต้องการของท่านได้อย่างเต็มที่ บริการนี้เหมาะสำหรับผู้ที่ต้องการการดูแลผู้ป่วยชราภาพคราวหลังการเจ็บป่วยหรือผ่าตัด หรือในช่วงเวลาที่ผู้ดูแลหลักต้องการพักผ่อน
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