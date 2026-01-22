import { useState, useContext } from "react";
import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { HospitalCalendar } from "@/components/serviceslist/HospitalCalendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../ui/input";
import { MessageContext } from "../../context/MessageContext"; // ✅ import context

export default function FromCalendarHospotal() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState(undefined);
  const [time, setTime] = useState("10:30:00");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { handleServiceCart } = useContext(MessageContext); // ✅ use context

  function handleBooking() {
    if (!date || !time) {
      alert("กรุณาเลือกวันและเวลา");
      return;
    }

    setLoading(true);

    handleServiceCart({
      serviceType: "Hospital",
      startDate: date.toISOString().split("T")[0],
      time,
    });

    console.log(handleServiceCart)
    navigate("/cart");
    setLoading(false);
  }

  return (
    <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-4 mb-12">
      <div className="flex flex-col gap-3">
        <Label htmlFor="date-picker" className="text-xl">
          วันที่ต้องการใช้บริการ
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
            <HospitalCalendar
              selected={date}
              onSelect={(date) => {
                setDate(date);
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex flex-col gap-3">
        <Label htmlFor="time-picker" className="text-xl">
          เวลา
        </Label>
        <Input
          type="time"
          id="time-picker"
          step="60"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="flex justify-center w-50 text-xl h-12 rounded-4xl bg-white rounded-4xl appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
        />
      </div>

      <div className="flex justify-center flex-wrap gap-4 mt-2 md:gap-4 md:mt-10">
        {/* <Link to="/ourcaregiver">
          <button
            type="caregiver"
            className="h-12 bg-sky-400 text-shadow-2xs text-white w-50 rounded-4xl text-xl hover:bg-sky-500 hover:cursor-pointer"
          >
            เลือกผู้ดูแล
          </button>
        </Link> */}

        <button
          type="button"
          onClick={handleBooking}
          disabled={loading}
          className="h-12 bg-pink-400 text-white w-50 rounded-4xl text-2xl hover:bg-pink-600 hover:cursor-pointer disabled:opacity-50"
        >
          {loading ? "กำลังจอง..." : "จองบริการ"}
        </button>
      </div>
    </div>
  );
}