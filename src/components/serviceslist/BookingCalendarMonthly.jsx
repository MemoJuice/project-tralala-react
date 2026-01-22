import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MonthlyCalendar } from "@/components/serviceslist/MonthlyCalendar";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useNavigate } from "react-router-dom";
import { MessageContext } from "../../context/MessageContext"; // ✅ import context
import { useState, useEffect, useContext } from "react";

export default function BookingCalendarMonthly({selectedCaregiver, service}) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(undefined);
  const [endDate, setEndDate] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { cart, setCart } = useContext(MessageContext); // ✅ use context

  function handleBooking() {
    if (!date || !endDate) {
      alert("กรุณาเลือกวันเริ่มและวันสิ้นสุด");
      return;
    };

    setLoading(true);

    let caregiverID = "";
    if(selectedCaregiver) {
      caregiverID = selectedCaregiver._id;
    };
    
    // ✅ Save booking details into context cart
    setCart({
      // serviceType: "monthly",
      startDate: date.toISOString().split("T")[0],
      endDate: endDate.toISOString().split("T")[0],
      caregiverID: caregiverID,
      serviceID: service._id,
      name: service.name,
      price: service.price,
      description: service.description,
    });

    console.log(cart)
    // ✅ Navigate to cart page
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

    if (selectedDate) {
      const newEnd = new Date(selectedDate);
      newEnd.setDate(newEnd.getDate() + 30); // auto +30 days
      setEndDate(newEnd);
    }
    setOpen(false);
  }

  return (
    <div className="flex flex-wrap gap-4 ">
      <div className="flex flex-wrap gap-4">
        <div className="flex-col flex gap-2">
          <Label htmlFor="date-picker" className="text-xl">
            วันเริ่มที่ใช้บริการ
          </Label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                id="date-picker"
                className="flex justify-center w-50 h-12 rounded-4xl font-normal"
              >
                {date ? date.toLocaleDateString("th-TH") : "เลือกวันที่ต้องการ"}
                <ChevronDownIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto overflow-hidden p-0" align="start">
              <MonthlyCalendar selected={date} onSelect={handleStartDate} />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex-col flex gap-2">
          <Label htmlFor="date-picker" className="text-xl">
            ใช้บริการถึงวันที่
          </Label>
          <Button
            variant="outline"
            id="date-picker"
            className="flex justify-center w-50 h-12 rounded-4xl font-normal"
          >
            {endDate ? endDate.toLocaleDateString("th-TH") : "ระบบจะกำหนด +30 วัน"}
            <ChevronDownIcon />
          </Button>
        </div>
      </div>

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
