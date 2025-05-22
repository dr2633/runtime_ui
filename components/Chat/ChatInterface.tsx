// components/chatbox/ChatInterface.tsx
import React, { useState } from 'react';
import { SimulatedEvent } from '@/components/calendar/CalendarEventBlock';

export interface ChatFeedback {
  option_uid: string;
  user_action: 'edited' | 'accepted' | 'rejected';
  notes: string;
}

interface ChatInterfaceProps {
  context: SimulatedEvent;
  onSubmitFeedback: (feedback: ChatFeedback) => void;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ context, onSubmitFeedback }) => {
  const [input, setInput] = useState('');
  const [action, setAction] = useState<'edited' | 'accepted' | 'rejected'>('edited');

  const handleSubmit = () => {
    if (!input.trim()) return;
    const payload: ChatFeedback = {
      option_uid: context.uid,
      user_action: action,
      notes: input.trim(),
    };
    onSubmitFeedback(payload);
    setInput('');
  };

  return (
    <div className="p-4 rounded-md border border-gray-700 bg-gray-900 space-y-3">
      <div className="text-sm font-semibold text-gray-300">
        Feedback for: <span className="text-white">{context.title}</span>
      </div>

      <select
        className="w-full text-sm p-2 border bg-gray-800 border-gray-600 rounded"
        value={action}
        onChange={(e) => setAction(e.target.value as ChatFeedback['user_action'])}
      >
        <option value="edited">Suggest change</option>
        <option value="accepted">Looks good</option>
        <option value="rejected">Not relevant</option>
      </select>

      <textarea
        className="w-full h-20 p-2 text-sm bg-gray-800 text-white border border-gray-600 rounded resize-none"
        placeholder="e.g. Move to Friday afternoon — it's too close to the investor call."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 text-sm font-medium rounded"
      >
        Submit Feedback
      </button>
    </div>
  );
};
