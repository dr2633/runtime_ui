// hooks/useCalendarState.ts
import { useState } from 'react';
import { SimulatedEvent } from '@/components/calendar/CalendarEventBlock';

export type ViewMode = 'daily' | 'weekly' | 'monthly';
export type ThemeName = 'charcoal' | 'mint' | 'ocean';

export const useCalendarState = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('weekly');
  const [theme, setTheme] = useState<ThemeName>('charcoal');
  const [selectedEvent, setSelectedEvent] = useState<SimulatedEvent | null>(null);

  return {
    viewMode,
    setViewMode,
    theme,
    setTheme,
    selectedEvent,
    setSelectedEvent,
  };
};
