'use client';

import React from 'react';
import { DatePicker } from '@siberui/react';

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return <DatePicker label="Date of Birth" value={date} onChange={setDate} />;
}

export function DatePickerNeonDemo() {
  const [date, setDate] = React.useState<Date | undefined>();
  return <DatePicker variant="neon" label="Execution Date" value={date} onChange={setDate} />;
}
