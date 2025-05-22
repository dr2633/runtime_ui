// components/calendar/ViewToggle.tsx
import React from 'react';

interface ViewToggleProps {
  viewMode: 'daily' | 'weekly' | 'monthly';
  setViewMode: (mode: 'daily' | 'weekly' | 'monthly') => void;
}

export const ViewToggle: React.FC<ViewToggleProps> = ({ viewMode, setViewMode }) => {
  const modes: ('daily' | 'weekly' | 'monthly')[] = ['daily', 'weekly', 'monthly'];

  return (
    <div className="flex space-x-2">
      {modes.map((mode) => (
        <button
          key={mode}
          onClick={() => setViewMode(mode)}
          className={`px-3 py-1 text-xs rounded border uppercase tracking-wide ${
            mode === viewMode
              ? 'bg-white text-black border-white'
              : 'bg-transparent border-gray-500 text-gray-300 hover:border-white'
          }`}
        >
          {mode}
        </button>
      ))}
    </div>
  );
};
