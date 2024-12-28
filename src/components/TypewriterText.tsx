import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
}

export function TypewriterText({ text }: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    setDisplayedText(''); // Reset when text changes
    
    const words = text.split(' ');
    let currentText = '';
    let wordIndex = 0;
    
    const interval = setInterval(() => {
      if (wordIndex >= words.length) {
        clearInterval(interval);
        return;
      }
      
      currentText += (wordIndex > 0 ? ' ' : '') + words[wordIndex];
      setDisplayedText(currentText);
      wordIndex++;
    }, 50); // Faster word-by-word animation
    
    return () => clearInterval(interval);
  }, [text]);
  
  return (
    <span className="inline-block animate-fade-in">
      {displayedText}
      {displayedText.length < text.length && (
        <span className="inline-block w-1 h-4 ml-0.5 align-middle bg-[#86446C] animate-pulse" />
      )}
    </span>
  );
}