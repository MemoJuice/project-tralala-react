import { useEffect, useState, useContext } from "react";
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

export default function BookingCalendarHospital({selectedCaregiver, service}) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(undefined);
  const [time, setTime] = useState("10:30:00");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { cart, setCart } = useContext(MessageContext); // ✅ use context

  function handleBooking() {
    if (!date || !time) {
      alert("กรุณาเลือกวันและเวลา");
      return;
    }

    setLoading(true);

    let caregiverID = "";
    if(selectedCaregiver) {
      caregiverID = selectedCaregiver._id;
    };

    setCart({
      // serviceType: "hospital",
      startDate: date.toISOString().split("T")[0],
      time,
      caregiverID: caregiverID,
      serviceID: service._id,
      name: service.name,
      price: service.price,
      description: service.description
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

  return (
    <div className="flex flex-wrap gap-4 ">
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

        {selectedCaregiver &&
          <button
            className="h-12 text-shadow-2xs bg-pink-50 text-black w-50 rounded-4xl text-xl border font-semibold"
          >
            ผู้ดูแล: {selectedCaregiver.firstName} {selectedCaregiver.lastName}
          </button>
        }

        <button
          type="button"
          onClick={handleBooking}
          disabled={loading}
          className="h-12 bg-pink-400 text-white w-50 rounded-4xl text-xl hover:bg-pink-600 hover:cursor-pointer disabled:opacity-50"
        >
          {loading ? "กำลังจอง..." : "จองบริการ"}
        </button>
      </div>
    </div>
  );
}