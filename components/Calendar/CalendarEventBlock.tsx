// components/calendar/CalendarEventBlock.tsx
import React from 'react';
import { getEventStyle, EventType } from '@/components/styles/eventStyles';
import { CalendarTheme } from '@/components/calendar/calendarThemes';

export interface SimulatedEvent {
  uid: string;
  title: string;
  type: EventType;
  start: string; // ISO string
  end: string;   // ISO string
  rationale?: string;
}

interface CalendarEventBlockProps {
  event: SimulatedEvent;
  theme: CalendarTheme;
  onSelect?: (event: SimulatedEvent) => void;
}

export const CalendarEventBlock: React.FC<CalendarEventBlockProps> = ({
  event,
  theme,
  onSelect,
}) => {
  const style = getEventStyle(event.type, theme);

  const handleClick = () => {
    if (onSelect) {
      onSelect(event);
    }
  };

  return (
    <div
      onClick={handleClick}
      role="button"
      aria-label={`Event: ${event.title}`}
      className="rounded-md p-2 text-sm cursor-pointer transition-all overflow-hidden"
      style={{
        backgroundColor: style.background,
        color: style.text,
        border: `1px solid ${style.border}`,
        boxShadow: style.glow,
      }}
    >
      <div className="font-medium truncate">{event.title}</div>
      {event.rationale && (
        <div className="text-xs mt-1 opacity-80 line-clamp-2">
          {event.rationale}
        </div>
      )}
    </div>
  );
};
