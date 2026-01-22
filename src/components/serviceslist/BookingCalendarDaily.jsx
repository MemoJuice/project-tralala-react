  import { useEffect, useState, useContext } from "react";
  import * as React from "react";
  import { ChevronDownIcon } from "lucide-react";
  import { useNavigate } from "react-router-dom";

  import { Button } from "@/components/ui/button";
  import { DailyCalendar } from "@/components/serviceslist/DailyCalendar"
  import { Label } from "@/components/ui/label"
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import { MessageContext } from "../../context/MessageContext";

  export default function BookingCalendarDaily({selectedCaregiver, service}) {
    const [openStart, setOpenStart] = useState(false);
    const [openEnd, setOpenEnd] = useState(false);
    const [date, setDate] = useState(undefined);
    const [endDate, setEndDate] = useState(undefined);
    const [shift, setShift] = useState("")
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { cart, setCart } = useContext(MessageContext); // ✅ use context

    function handleBooking() {
      if (!date || !endDate || !shift) {
        alert("กรุณาเลือกวันเริ่ม วันสิ้นสุด และเวรที่ต้องการ");
        return;
      };

      setLoading(true);

    let caregiverID = "";
    if(selectedCaregiver) {
      caregiverID = selectedCaregiver._id;
    };

    // ✅ Save booking details into context cart
      setCart({
        // serviceType: "daily",
        startDate: date.toISOString().split("T")[0],
        endDate: endDate.toISOString().split("T")[0],
        shift,
        caregiverID: caregiverID,
        serviceID: service._id,
        name: service.name,
        price: service.price,
        description: service.description,
    });

      navigate("/cart");
      setLoading(false);
    }

    useEffect(() => {
      console.log(cart);
      if (sessionStorage.getItem("token")) {
          sessionStorage.setItem("cart", JSON.stringify(cart));
      } else if (localStorage.getItem("token")) {
          localStorage.setItem("cart", JSON.stringify(cart));
      };
    }, [cart]);

    function handleStartDate(selectedDate) {
      setDate(selectedDate);
      setOpenStart(false);
      setEndDate(undefined); // reset end date when start changes
    }

    function handleEndDate(selectedEnd) {
      if (!date) {
        alert("กรุณาเลือกวันเริ่มบริการก่อน");
        return;
      }

      const minEnd = new Date(date);
      minEnd.setDate(minEnd.getDate() + 1);

      const maxEnd = new Date(date);
      maxEnd.setDate(maxEnd.getDate() + 7);

      if (selectedEnd < minEnd) {
        alert("วันสิ้นสุดต้องไม่น้อยกว่า 1 วันหลังวันเริ่ม");
        return;
      }
      if (selectedEnd > maxEnd) {
        alert("วันสิ้นสุดต้องไม่เกิน 7 วันจากวันเริ่ม");
        return;
      }

      setEndDate(selectedEnd);
      setOpenEnd(false);
    }

    return (
      <div className="flex flex-wrap gap-4 ">
        <div className="flex flex-wrap gap-4">
          <div className="flex-col flex gap-2">
            <Label htmlFor="start-date-picker" className="text-xl">
              วันเริ่มที่ใช้บริการ
            </Label>
            <Popover open={openStart} onOpenChange={setOpenStart}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  id="start-date-picker"
                  className="flex justify-center w-50 h-12 rounded-4xl font-normal"
                >
                  {date ? date.toLocaleDateString("th-TH") : "เลือกวันเริ่ม"}
                  <ChevronDownIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                <DailyCalendar selected={date} onSelect={handleStartDate} />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex-col flex gap-2">
            <Label htmlFor="end-date-picker" className="text-xl">
              ใช้บริการถึงวันที่
            </Label>
            <Popover open={openEnd} onOpenChange={setOpenEnd}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  id="end-date-picker"
                  className="flex justify-center w-50 h-12 rounded-4xl font-normal"
                >
                  {endDate ? endDate.toLocaleDateString("th-TH") : "เลือกวันสิ้นสุด (+1 ถึง +7 วัน)"}
                  <ChevronDownIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                <DailyCalendar selected={endDate} onSelect={handleEndDate} />
              </PopoverContent>
            </Popover>
          </div>
        </div>

          <select
            name="shift"
            value={shift}
            onChange={(e) => setShift(e.target.value)}
            className=" flex justify-center items-center md:mt-10 border-solid border-2
              pl-5 w-50 h-12 text-xl rounded-4xl bg-white appearance-none shadow-2xs hover:bg-pink-200 ">
            <option value="" disabled>
              เวลาที่ต้องการ
            </option>
            <option value="dayshift">เวรเช้า (8.00-19.00)</option>
            <option value="nightshift">เวรดึก (19.00-8.00)</option>
            </select> 

        <div className="flex justify-center flex-wrap gap-4 mt-2 md:gap-4 md:mt-10">

          {selectedCaregiver &&
            <button
              className="h-12 text-shadow-2xs bg-pink-50 text-black w-50 rounded-4xl text-xl border font-semibold"
            >
              ผู้ดูแล: {selectedCaregiver.firstName} {selectedCaregiver.lastName}
            </button>
          }

          <button
            onClick={handleBooking}
            type="booking"
            className="h-12 bg-pink-400 text-white w-50 rounded-4xl text-xl hover:bg-pink-600 hover:cursor-pointer"
          >
            จองบริการ
          </button>
        </div>      
      </div>
    );
  }
