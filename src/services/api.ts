interface ChatResponse {
  message: string;
}

export async function sendChatMessage(messageBody: string): Promise<ChatResponse> {
  const response = await fetch('http://localhost:8080/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ messageBody }),
  });


  if (!response.ok) {
    throw new Error('Failed to send message');
  }

  return response.json();
}