import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Message } from './components/Message';
import { ThinkingIndicator } from './components/ThinkingIndicator';
import { sendChatMessage } from './services/api';

function App() {
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { text: userMessage, isUser: true }]);
    setIsThinking(true);
    setInput('');
    
    try {
      console.log('Sending message:', userMessage);
      const response = await sendChatMessage(userMessage);
      console.log('Received response:', response);
      setMessages(prev => [...prev, { text: response.messageBody, isUser: false }]);
      console.log('Updated messages:', messages);
    } catch (error) {
      setMessages(prev => [...prev, { 
        text: "Sorry, I couldn't process your message. Please try again.", 
        isUser: false 
      }]);
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1 max-w-2xl w-full mx-auto p-4 flex flex-col">
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {messages.map((message, index) => (
            <Message key={index} {...message} />
          ))}
          {isThinking && <ThinkingIndicator />}
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 rounded-full border border-gray-200 px-6 py-3 focus:outline-none focus:border-[#86446C] focus:ring-1 focus:ring-[#86446C]"
          />
          <button
            type="submit"
            className="bg-[#86446C] text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#6D3757] transition-colors"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;