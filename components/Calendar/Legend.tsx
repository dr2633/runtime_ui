// components/calendar/Legend.tsx
import React from 'react';
import { getEventStyle, EventType } from '@/components/styles/eventStyles';
import { CalendarTheme } from './calendarThemes';

interface LegendProps {
  theme: CalendarTheme;
}

const eventTypes: EventType[] = [
  'work',
  'rest',
  'reflection',
  'high_cog_load',
  'low_priority',
  'deadline',
];

const eventLabels: Record<EventType, string> = {
  work: 'Work',
  rest: 'Rest',
  reflection: 'Reflection',
  high_cog_load: 'Deep Focus',
  low_priority: 'Low Priority',
  deadline: 'Deadline',
};

export const Legend: React.FC<LegendProps> = ({ theme }) => {
  return (
    <div className="p-4">
      <h3 className="text-sm font-semibold mb-2 uppercase tracking-wide text-gray-500">
        Legend
      </h3>
      <ul className="space-y-2">
        {eventTypes.map((type) => {
          const style = getEventStyle(type, theme);
          return (
            <li key={type} className="flex items-center space-x-2">
              <span
                className="inline-block w-4 h-4 rounded-sm"
                style={{
                  backgroundColor: style.background,
                  border: `1px solid ${style.border}`,
                }}
              ></span>
              <span className="text-sm text-gray-300">{eventLabels[type]}</span>
