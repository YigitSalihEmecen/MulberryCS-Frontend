import React from 'react';

export function ThinkingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="bg-white shadow-sm border border-gray-100 rounded-full px-6 py-3">
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-[#86446C] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-2 h-2 bg-[#86446C] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-2 h-2 bg-[#86446C] rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}