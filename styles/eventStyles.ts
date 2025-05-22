// eventStyles.ts
import { CalendarTheme } from './calendarThemes';

export type EventType =
  | 'work'
  | 'rest'
  | 'reflection'
  | 'high_cog_load'
  | 'low_priority'
  | 'deadline';

export interface EventStyle {
  background: string;
  text: string;
  border: string;
  glow?: string;
}

/**
 * Returns the styling for a given event type, adjusted for the active calendar theme.
 */
export function getEventStyle(eventType: EventType, theme: CalendarTheme): EventStyle {
  switch (eventType) {
    case 'work':
      return {
        background: theme.accent,
        text: theme.text,
        border: theme.border,
        glow: `0 0 6px ${theme.accent}`,
      };
    case 'rest':
      return {
        background: theme.selection,
        text: theme.text,
        border: theme.border,
      };
    case 'reflection':
      return {
        background: theme.border,
        text: theme.accent,
        border: theme.selection,
        glow: `0 0 4px ${theme.accent}`,
      };
    case 'high_cog_load':
      return {
        background: theme.accent,
        text: theme.text,
        border: theme.accent,
        glow: `0 0 8px ${theme.accent}`,
      };
    case 'low_priority':
      return {
        background: theme.border,
        text: theme.text,
        border: theme.border,
      };
    case 'deadline':
      return {
        background: '#FF4D4D', // Red alert override
        text: '#FFFFFF',
        border: '#FF1A1A',
        glow: '0 0 10px #FF1A1A',
      };
    default:
      return {
        background: theme.background,
        text: theme.text,
        border: theme.border,
      };
  }
}
