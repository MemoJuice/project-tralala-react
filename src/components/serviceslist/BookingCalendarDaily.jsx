import { useState } from "react";
import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DailyCalendar } from "@/components/serviceslist/DailyCalendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Link } from "react-router-dom"

export default function BookingCalendarDaily() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState(undefined)
  const [shift, setShift] = useState("")

  return (
    <div className="flex flex-wrap gap-4 ">
      <div className="flex flex-col gap-4">
        <Label htmlFor="date-picker" className="text-xl">
          วันและเวลาที่ใช้บริการ
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date-picker"
              className="flex-wrap justify-center w-50 h-12 text-xl rounded-4xl font-normal"
            >
              {date?.from ? `${date.from.toLocaleDateString()} - ${date.to?.toLocaleDateString() || ""}` : "เลือกวันที่ต้องการ"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <DailyCalendar
            selected={date}
            captionLayout="dropdown"
              onSelect={(date) => {
                setDate(date)
                setOpen(false)
              }}
             />
          </PopoverContent>
        </Popover>
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
            <Link to ="/ourcaregiver">
            <button type="caregiver" className="h-12 bg-sky-400 text-shadow-2xs text-white w-50 rounded-4xl text-xl hover:bg-sky-500 hover:cursor-pointer">
                  เลือกผู้ดูแล
            </button></Link>

            <Link to ="/cart"><button type="booking" className="h-12 bg-pink-400 text-white w-50 rounded-4xl text-xl hover:bg-pink-600 hover:cursor-pointer">
                  จองบริการ
            </button></Link>
          </div>
    </div>
  )
}
