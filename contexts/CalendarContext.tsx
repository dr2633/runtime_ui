import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import { defaultPreferences, ViewMode } from '../constants/defaultPreferences';

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
  const [viewMode, setViewMode] = useState<ViewMode>(defaultPreferences.defaultView);

  const { themeName } = useTheme(); // Access theme for optional behavior

  // Optional: adapt default view mode for specific themes
  useEffect(() => {
    if (themeName === 'charcoal' && viewMode !== 'month') {
      setViewMode('month');
    }
  }, [themeName]);

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
