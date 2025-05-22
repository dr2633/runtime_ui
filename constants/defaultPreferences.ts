import { CalendarThemeName } from '../styles/calendarThemes';

export type ViewMode = 'day' | 'week' | 'month';

export interface UserPreferences {
  theme: CalendarThemeName;
  defaultView: ViewMode;
  showWeekends: boolean;
  timeFormat: '12h' | '24h';
  autoFocusToday: boolean;
  notificationsEnabled: boolean;
}

export const defaultPreferences: UserPreferences = {
  theme: 'charcoal',
  defaultView: 'week',
  showWeekends: true,
  timeFormat: '24h',
  autoFocusToday: true,
  notificationsEnabled: true,
};

// Optional helper
export const getDefaultPreferences = (): UserPreferences => {
  return { ...defaultPreferences };
};
