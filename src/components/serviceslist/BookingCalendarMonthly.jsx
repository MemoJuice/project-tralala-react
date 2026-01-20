"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MonthlyCalendar} from "@/components/serviceslist/MonthlyCalendar"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Link } from "react-router-dom"

export default function BookingCalendarMonthly() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState(undefined)

  const [open2, setOpen2] = React.useState(false)
  const [endDate, setEndDate] = React.useState(undefined)

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
              className="flex justify-center w-50 h-12  rounded-4xl font-normal"
            >
              {date ? date.toLocaleDateString() : "เลือกวันที่ต้องการ"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            < MonthlyCalendar
              selected={date}
              onSelect={(date) => {
                setDate(date)
                setOpen(false)
              }}
            />
          </PopoverContent>
        </Popover>
        </div>
        <div className="flex-col flex gap-2">
        <Label htmlFor="date-picker" className="text-xl">
          ใช้บริการถึงวันที่
        </Label>
        <Popover open={open2} onOpenChange={setOpen2}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date-picker"
              className="flex justify-center w-50 h-12  rounded-4xl font-normal"
            >
              {endDate ? endDate.toLocaleDateString() : "เลือกวันที่ต้องการ"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            < MonthlyCalendar
              date={date}
              selected={endDate}
              onSelect={(endDate) => {
                setEndDate(endDate)
                setOpen(false)
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
      </div>
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
