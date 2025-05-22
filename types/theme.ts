// types/theme.ts

export type ThemeName = 'charcoal' | 'mint' | 'ocean';

export interface CalendarTheme {
  name: ThemeName;
  background: string;
  text: string;
  accent: string;
  border: string;
  selection: string;
}
