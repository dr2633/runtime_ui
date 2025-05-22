// components/calendar/CalendarView.tsx
import React from 'react';
import { CalendarEventBlock } from './CalendarEventBlock';
import { CalendarTheme } from './calendarThemes';
import { SimulatedEvent } from './CalendarEventBlock';

interface CalendarViewProps {
  events: SimulatedEvent[];
  viewMode: 'daily' | 'weekly' | 'monthly';
  theme: CalendarTheme;
  onSelectEvent?: (event: SimulatedEvent) => void;
}

export const CalendarView: React.FC<CalendarViewProps> = ({
  events,
  viewMode,
  theme,
  onSelectEvent,
}) => {
  // This is a simplified layout; in production, layout logic would handle time slices and spans
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {events.map((event) => (
        <CalendarEventBlock
          key={event.uid}
          event={event}
          theme={theme}
          onSelect={onSelectEvent}
        />
      ))}
    </div>
  );
};
