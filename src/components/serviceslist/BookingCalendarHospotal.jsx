import { useState } from "react"
import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HospitalCalendar} from "@/components/serviceslist/HospitalCalendar"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Link } from "react-router-dom"
import { Input } from "../ui/input"


export default function BookingCalendarHospotal() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState(undefined)
  const [time, setTime] = useState("10:30:00");

  async function handleBooking() {
  if (!date || !time) {
    alert("กรุณาเลือกวันและเวลา");
    return;
  }

  try {
    const res = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        date: date.toISOString().split("T")[0], // format YYYY-MM-DD
        time, // HH:mm:ss
      }),
    });

    if (!res.ok) throw new Error("Booking failed");
    const data = await res.json();
    console.log("Booking success:", data);
    // redirect or show success message
  } catch (err) {
    console.error(err);
    alert("เกิดข้อผิดพลาดในการจอง");
  }
}

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
              className="flex justify-center w-50 h-12  rounded-4xl font-normal"
            >
              {date ? date.toLocaleDateString() : "เลือกวันที่ต้องการ"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            < HospitalCalendar
              selected={date}
              onSelect={(date) => {
                setDate(date)
                setOpen(false)
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
          step="1"
          defaultValue="10:30:00"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className=" flex justify-center w-50 text-xl h-12 rounded-4xl bg-white appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
        />
      </div>
          <div className="flex justify-center flex-wrap gap-4 mt-2 md:gap-4 md:mt-10">
            <Link to ="/ourcaregiver">
            <button type="caregiver" className="h-12 bg-sky-400 text-shadow-2xs text-white w-50 rounded-4xl text-xl hover:bg-sky-500 hover:cursor-pointer">
                  เลือกผู้ดูแล
            </button></Link>

            <Link to ="/cart">
            <button type="booking"
              onClick={handleBooking}
              className="h-12 bg-pink-400 text-white w-50 rounded-4xl text-xl hover:bg-pink-600 hover:cursor-pointer">
                  จองบริการ
            </button></Link>
          </div>
    </div>
  )
}
