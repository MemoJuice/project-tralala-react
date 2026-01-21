import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MonthlyCalendar } from "@/components/serviceslist/MonthlyCalendar";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Link, useNavigate } from "react-router-dom";

export default function BookingCalendarMonthly() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState(undefined);
  const [endDate, setEndDate] = React.useState(undefined);

  const navigate = useNavigate();

  async function handleBooking() {
    if (!date || !endDate) {
      alert("กรุณาเลือกวันเริ่มและวันสิ้นสุด");
      return;
    }

    try {
      const res = await fetch("/api/monthly-bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          startDate: date.toISOString().split("T")[0],
          endDate: endDate.toISOString().split("T")[0],
        }),
      });

      if (!res.ok) throw new Error("Booking failed");
      const data = await res.json();
      console.log("Booking success:", data);

      navigate("/cart");
    } catch (err) {
      console.error(err);
      alert("เกิดข้อผิดพลาดในการจอง");
    }
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
        <Link to="/ourcaregiver">
          <button
            type="caregiver"
            className="h-12 bg-sky-400 text-shadow-2xs text-white w-50 rounded-4xl text-xl hover:bg-sky-500 hover:cursor-pointer"
          >
            เลือกผู้ดูแล
          </button>
        </Link>

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