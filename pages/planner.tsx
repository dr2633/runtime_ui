// pages/planner.tsx
import React from 'react';
import { SimulationCalendar } from '@/components/Calendar/SimulationCalendar';

const PlannerPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white font-sans">
      <SimulationCalendar />
    </div>
  );
};

export default PlannerPage;
