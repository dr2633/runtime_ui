import { colorPalette } from '../constants/colorPalette';

export type CalendarThemeName = 'charcoal' | 'mint' | 'ocean';

export interface CalendarTheme {
  name: CalendarThemeName;
  background: string;
  text: string;
  accent: string;
  border: string;
  selection: string;
}

export const calendarThemes: Record<CalendarThemeName, CalendarTheme> = {
  charcoal: {
    name: 'charcoal',
    background: colorPalette.charcoal[900],
    text: colorPalette.charcoal[100],
    accent: colorPalette.neon.green,
    border: colorPalette.charcoal[700],
    selection: colorPalette.neon.greenDim,
  },
  mint: {
    name: 'mint',
    background: colorPalette.mint[100],
    text: colorPalette.mint[900],
    accent: colorPalette.mint[500],
    border: colorPalette.mint[300],
    selection: colorPalette.mint[400],
  },
  ocean: {
    name: 'ocean',
    background: colorPalette.ocean[800],
    text: colorPalette.ocean[100],
    accent: colorPalette.ocean[400],
    border: colorPalette.ocean[600],
    selection: colorPalette.ocean[500],
  },
};
