import React from 'react';
import { cn } from '../utils/cn';

interface MessageProps {
  text: string;
  isUser: boolean;
}

export function Message({ text, isUser }: MessageProps) {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={cn(
          'max-w-[80%] rounded-full px-6 py-3',
          'animate-[scale-in_0.2s_ease-out_forwards]',
          isUser
            ? 'bg-[#86446C] text-white'
            : 'bg-white shadow-sm border border-gray-100'
        )}
      >
        {text}
      </div>
    </div>
  );
}