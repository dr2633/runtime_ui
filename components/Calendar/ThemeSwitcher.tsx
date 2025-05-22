// components/calendar/ThemeSwitcher.tsx
import React from 'react';

interface ThemeSwitcherProps {
  theme: 'charcoal' | 'mint' | 'ocean';
  setTheme: (theme: 'charcoal' | 'mint' | 'ocean') => void;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ theme, setTheme }) => {
  const themes: ('charcoal' | 'mint' | 'ocean')[] = ['charcoal', 'mint', 'ocean'];

  return (
    <div className="flex space-x-2">
      {themes.map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          className={`px-3 py-1 text-xs rounded border ${
            t === theme
              ? 'bg-white text-black border-white'
              : 'bg-transparent border-gray-500 text-gray-300 hover:border-white'
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
};
