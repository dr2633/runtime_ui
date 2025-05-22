// components/calendar/SimulationCalendar.tsx
import React, { useState } from 'react';
import { CalendarView } from './CalendarView';
import { Legend } from './Legend';
import { ThemeSwitcher } from './ThemeSwitcher';
import { ViewToggle } from './ViewToggle';
import { useSimulatedEvents } from '@/hooks/useSimulatedEvents';
import { CalendarTheme, calendarThemes } from './calendarThemes';
import { ChatBox } from '@/components/chatbox/ChatBox';
import { SimulatedEvent } from './CalendarEventBlock';

export const SimulationCalendar: React.FC = () => {
  const [viewMode, setViewMode] = useState<'daily' | 'weekly' | 'monthly'>('weekly');
  const [themeName, setThemeName] = useState<'charcoal' | 'mint' | 'ocean'>('charcoal');
  const [selectedEvent, setSelectedEvent] = useState<SimulatedEvent | null>(null);

  const theme: CalendarTheme = calendarThemes[themeName];
  const events = useSimulatedEvents(); // Replace with real hook/api integration

  return (
    <div
      className="min-h-screen w-full transition-all"
      style={{ backgroundColor: theme.background, color: theme.text }}
    >
      <header className="flex items-center justify-between p-4 border-b" style={{ borderColor: theme.border }}>
        <div className="text-lg font-semibold">Runtime Calendar</div>
        <div className="flex items-center space-x-4">
          <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />
          <ThemeSwitcher theme={themeName} setTheme={setThemeName} />
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
        <div className="md:col-span-3">
          <CalendarView
            events={events}
            viewMode={viewMode}
            theme={theme}
            onSelectEvent={setSelectedEvent}
          />
        </div>
        <aside className="md:col-span-1 space-y-4">
          <Legend theme={theme} />
          {selectedEvent && (
            <ChatBox context={selectedEvent} />
          )}
        </aside>
      </main>
    </div>
  );
};
