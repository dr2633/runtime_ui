// types/events.ts

export type EventType =
  | 'work'
  | 'rest'
  | 'reflection'
  | 'high_cog_load'
  | 'low_priority'
  | 'deadline';

export interface SimulatedEvent {
  uid: string;
  title: string;
  type: EventType;
  start: string; // ISO 8601 format
  end: string;   // ISO 8601 format
  rationale?: string;
}
