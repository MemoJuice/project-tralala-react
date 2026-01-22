import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MonthlyCalendar } from "@/components/serviceslist/MonthlyCalendar";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useNavigate } from "react-router-dom";
import { MessageContext } from "../../context/MessageContext"; // ✅ import context
import { useContext } from "react";

export default function FromCalendarMonthly() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState(undefined);
  const [endDate, setEndDate] = React.useState(undefined);

  const navigate = useNavigate();
  const { handleServiceCart } = useContext(MessageContext); // ✅ use context

  function handleBooking() {
    if (!date || !endDate) {
      alert("กรุณาเลือกวันเริ่มและวันสิ้นสุด");
      return;
    }

    // ✅ Save booking details into context cart
    handleServiceCart({
      description: "บริการดูแลรายเดือน",
      serviceType: "monthly",
      startDate: date.toISOString().split("T")[0],
      endDate: endDate.toISOString().split("T")[0],
      });

    // ✅ Navigate to cart page
    navigate("/cart");
  }

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
    <div>
      <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-4 mb-12">
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
        
        <button
          onClick={handleBooking}
          type="booking"
          className="h-12 bg-pink-400 text-white md:mt-8 w-50 rounded-4xl text-xl hover:bg-pink-600 hover:cursor-pointer"
        >
          จองบริการ
        </button>
      </div>
    </div>
  );
}
