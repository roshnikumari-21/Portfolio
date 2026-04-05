import { useChat } from '@ai-sdk/react';

export default function TestComponent() {
  const chat = useChat();
  console.log("Chat keys:", Object.keys(chat));
  return null;
}
