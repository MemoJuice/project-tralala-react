"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HospitalCalendar } from "@/components/serviceslist/HospitalCalendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Link } from "react-router-dom"

export default function BookingCalendarHospotal() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState(undefined)

  return (
    <div className="flex flex-wrap gap-4 ">
      <div className="flex flex-col gap-3">
        <Label htmlFor="date-picker" className="text-xl">
          วัน
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
            <HospitalCalendar
              mode="single"
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
      <div className="flex flex-col gap-3">
        <Label htmlFor="time-picker" className="text-xl">
          เวลา
        </Label>
        <Input
          type="time"
          id="time-picker"
          step="1"
          defaultValue="10:30:00"
          className=" flex justify-center w-50 h-12 text-xl rounded-4xl bg-white appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
        />
      </div>
          <Link to ="/ourcaregiver"><button className="h-12 md:mt-10 bg-sky-900 text-white w-30 rounded-4xl text-xl hover:bg-sky-400 hover:cursor-pointer">
								เลือกผู้ดูแล
					</button></Link>
      		<Link to ="/cart"><button className="h-12 md:mt-10 bg-pink-400 text-white w-50 rounded-4xl text-xl hover:bg-pink-600 hover:cursor-pointer">
								จองบริการ
					</button></Link>
    </div>
  )
}
