// hooks/useSimulatedEvents.ts
import { useEffect, useState } from 'react';
import { SimulatedEvent } from '@/components/calendar/CalendarEventBlock';

export const useSimulatedEvents = (): SimulatedEvent[] => {
  const [events, setEvents] = useState<SimulatedEvent[]>([]);

  useEffect(() => {
    // Mock data for development — replace with API call in production
    const mock: SimulatedEvent[] = [
      {
        uid: 'evt1',
        title: 'Deep Work Session',
        type: 'high_cog_load',
        start: '2025-05-21T10:00:00',
        end: '2025-05-21T12:00:00',
        rationale: 'Aligned with peak energy block before calls.',
      },
      {
        uid: 'evt2',
        title: 'Investor Call Review',
        type: 'work',
        start: '2025-05-21T13:00:00',
        end: '2025-05-21T14:00:00',
        rationale: 'Prep before Friday’s pitch session.',
      },
      {
        uid: 'evt3',
        title: 'Rest & Reflection',
        type: 'rest',
        start: '2025-05-21T15:00:00',
        end: '2025-05-21T16:00:00',
        rationale: 'Recovery block after cognitive load.',
      },
    ];

    setEvents(mock);
  }, []);

  return events;
};
