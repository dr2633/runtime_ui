import React, { createContext, useContext, useEffect, useState } from 'react';
import { calendarThemes, CalendarTheme, CalendarThemeName } from '../styles/calendarThemes';

interface ThemeContextType {
  themeName: CalendarThemeName;
  setThemeName: (theme: CalendarThemeName) => void;
  theme: CalendarTheme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'runtime-theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeName, setThemeState] = useState<CalendarThemeName>('charcoal');

  // Load theme from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored && isValidThemeName(stored)) {
      setThemeState(stored as CalendarThemeName);
    }
  }, []);

  // Sync theme to localStorage and document attribute
  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, themeName);
    document.documentElement.setAttribute('data-theme', themeName); // for CSS or testing
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
