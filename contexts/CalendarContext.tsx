import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';

type ViewMode = 'day' | 'week' | 'month';

interface CalendarContextType {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  resetToToday: () => void;
}

const CalendarContext = createContext<CalendarContextType | undefined>(undefined);

export const CalendarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [viewMode, setViewMode] = useState<ViewMode>('week');

  const { theme } = useTheme(); // Optional: use to sync visuals/layouts with theme

  // Optional: log viewMode or adapt layout based on theme
  useEffect(() => {
    // Example: change default view mode based on theme
    if (theme === 'charcoal' && viewMode !== 'month') {
      setViewMode('month');
    }
  }, [theme]);

  const resetToToday = () => {
    setSelectedDate(new Date());
  };

  return (
    <CalendarContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        viewMode,
        setViewMode,
        resetToToday,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendar = (): CalendarContextType => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error('useCalendar must be used within a CalendarProvider');
  }
  return context;
};
