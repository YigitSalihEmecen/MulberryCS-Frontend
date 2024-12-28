import React from 'react';
import { ArrowDown } from 'lucide-react';
import { cn } from '../utils/cn';

interface ScrollToBottomProps {
  show: boolean;
  onClick: () => void;
}

export function ScrollToBottom({ show, onClick }: ScrollToBottomProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'fixed bottom-24 right-4 bg-white shadow-lg rounded-full p-3',
        'transition-all duration-200 ease-in-out',
        'hover:bg-gray-50 border border-gray-200',
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      )}
    >
      <ArrowDown size={20} className="text-gray-600" />
    </button>
  );
}