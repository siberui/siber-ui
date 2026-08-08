'use client';

import React from 'react';
import { Calendar } from '@siberui/react';

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return <Calendar mode="single" selected={date} onSelect={setDate} />;
}

export function CalendarNeonDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return <Calendar variant="neon" mode="single" selected={date} onSelect={setDate} />;
}
