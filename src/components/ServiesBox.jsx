"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const frameworks = [
  {
    value: "hospitalplan",
    label: "พาไปหาหมอ",
    view: "hospitalplan",
    setValue: "hospitalplan",
  },
  {
    value: "dailyplan",
    label: "บริการดูแลรายวัน",
    view: "dailyplan",
    setValue: "dailyplan",
  },
  {
    value: "monthlyplan",
    label: "บริการดูแลรายเดือน",
    view: "monthlyplan",
    setValue: "monthlyplan",
  }
]

export default function ServiesBox() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="ServiesBox"
          aria-expanded={open}
          className="w-full h-12 md:w-100 text-gray-700 border-gray-200 rounded-4xl bg-white focus:ring-2 focus:ring-pink-400 text-2xl"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "เลือกประเภทบริการ"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="เลือกประเภทบริการ" className="text-xl text-gray-700" />
          <CommandList>
            <CommandEmpty>ไม่มีบริการที่เลือก</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  className="text-xl"
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    // onChange(currentValue) 
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {framework.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
