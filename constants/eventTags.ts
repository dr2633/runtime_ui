export interface EventTag {
    id: string;
    label: string;
    color: {
      background: string;
      text: string;
      border: string;
    };
    icon?: string; // Optional: for future use in UI
  }
  
  // Canonical tags
  export const eventTags: Record<string, EventTag> = {
    meeting: {
      id: 'meeting',
      label: 'Meeting',
      color: {
        background: '#e0f2fe',
        text: '#0369a1',
        border: '#bae6fd',
      },
    },
    focus: {
      id: 'focus',
      label: 'Focus',
      color: {
        background: '#ecfdf5',
        text: '#065f46',
        border: '#d1fae5',
      },
    },
    personal: {
      id: 'personal',
      label: 'Personal',
      color: {
        background: '#fefce8',
        text: '#92400e',
        border: '#fde68a',
      },
    },
    travel: {
      id: 'travel',
      label: 'Travel',
      color: {
        background: '#f3e8ff',
        text: '#6b21a8',
        border: '#e9d5ff',
      },
    },
    health: {
      id: 'health',
      label: 'Health',
      color: {
        background: '#fff1f2',
        text: '#991b1b',
        border: '#fecaca',
      },
    },
  };
  
  // Helpers
  export const getTagById = (id: string): EventTag | undefined => {
    return eventTags[id];
  };
  
  export const getAllTags = (): EventTag[] => {
    return Object.values(eventTags);
  };
  