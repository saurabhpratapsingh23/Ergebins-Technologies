"use client"; // Ensure this component is treated as a Client Component

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

export function CalendarDemo({ selectedDate, onDateChange }) {
  return (
    <Calendar
      mode="single"
      selected={selectedDate}
      onSelect={onDateChange}
      className="rounded-md border shadow"
    />
  );
}