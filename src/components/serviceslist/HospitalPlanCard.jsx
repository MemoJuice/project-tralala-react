import { useState, useEffect } from "react";
import apiauth from "@/api/axios.js";
import BookingCalendarHospotal from "@/components/serviceslist/BookingCalendarHospotal";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"


export default function HospitalPlanCard ({service}){
    let token = "";
    let caregiverID = "";
    if (sessionStorage.getItem("token")) {
      token = sessionStorage.getItem("token");
      caregiverID = sessionStorage.getItem("caregiverID");
    } else if (localStorage.getItem("token")) {
      token = localStorage.getItem("token");
      caregiverID = localStorage.getItem("caregiverID");
    };
    
    const [selectedCaregiver, setSelectedCaregiver] = useState(null);

    useEffect(() => {
      if (!caregiverID) return;

      const fetchCaregiver = async () => {
        try {
          const res = await apiauth.get(`/caregivers/${caregiverID}`);
          setSelectedCaregiver(res.data); // ✅ saved in state
        } catch (err) {
          console.error("Failed to fetch caregiver", err);
        }
      };

      fetchCaregiver();
    }, [caregiverID]);

    return (
        <div className="items-center w-full mt-8 bg-white rounded-2xl shadow-2xs p-4 grid grid-cols-1 md:grid-cols-2 overflow-hidden">
            <div className="bg-gray-50 flex items-center justify-center overflow-hidden">
              <img 
                src="images/caregiving-hos.jpg"
                alt="Service Image" 
                className="w-full object-contain rounded-2xl shadow-2xs"
              />
            </div>

         <div className="p-4 flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-bold mt-2 text-gray-700">
                  บริการพาไปโรงพยาบาล
                </h1>

                <p className="text-gray-700 mt-4 ">
                    บริการพาไปโรงพยาบาล ดูแลตั้งแต่การเดินทาง การรอพบแพทย์ จนถึงการรับยา เพื่อความปลอดภัย สะดวก และสบายใจของผู้รับบริการและครอบครัว     เพื่อให้ผู้สูงอายุมีคุณภาพชีวิตที่ดีและครอบครัวสบายใจ      
                </p>

                <div className="mt-4">
                  <HoverCard>
                      <HoverCardTrigger className="text-blue-400">อ่านเพิ่มเติม</HoverCardTrigger>
                      <HoverCardContent>
                        ติดต่อล่วงหน้าอย่างน้อย 6 ชั่วโมง <br/>เพื่อให้เราจัดเตรียมการดูแลที่เหมาะสมกับความต้องการของท่านได้อย่างเต็มที่ บริการนี้เหมาะสำหรับผู้ที่ต้องการการดูแลผู้ป่วยชราภาพ
                      </HoverCardContent>
                    </HoverCard>
              </div>

              {token &&
              <div className="mt-6">
                <div className="flex w-full h-auto justify-evenly">
                 <BookingCalendarHospotal selectedCaregiver={selectedCaregiver} service={service} />
                </div>
              </div>
              }
            </div>
       </div>
    </div>
    );
}