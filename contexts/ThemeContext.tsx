import React, { createContext, useContext, useEffect, useState } from 'react';
import { calendarThemes, CalendarTheme, CalendarThemeName } from '../styles/calendarThemes';
import { defaultPreferences } from '../constants/defaultPreferences';

interface ThemeContextType {
  themeName: CalendarThemeName;
  setThemeName: (theme: CalendarThemeName) => void;
  theme: CalendarTheme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'runtime-theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getInitialTheme = (): CalendarThemeName => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored && isValidThemeName(stored)) return stored as CalendarThemeName;
    return defaultPreferences.theme;
  };

  const [themeName, setThemeState] = useState<CalendarThemeName>(getInitialTheme);

  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, themeName);
    document.documentElement.setAttribute('data-theme', themeName);
  }, [themeName]);

  const setThemeName = (newTheme: CalendarThemeName) => {
    if (isValidThemeName(newTheme)) {
      setThemeState(newTheme);
    }
  };

  const theme = calendarThemes[themeName];

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const isValidThemeName = (value: string): value is CalendarThemeName => {
  return Object.keys(calendarThemes).includes(value);
};
