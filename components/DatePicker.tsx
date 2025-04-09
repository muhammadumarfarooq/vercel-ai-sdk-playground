"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@craveup/ui/components/button";
import { Calendar } from "@craveup/ui/components/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@craveup/ui/components/popover";
import { cn } from "../lib/utils";

export function DatePicker({
  date,
  setDate,
}: {
  date: Date;
  setDate: (newDate?: Date) => void;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !date && "text-muted-foreground",
          )}
        >
          <CalendarIcon />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
