'use client';

import { useEffect, useState } from 'react';
import PortfolioChatbot from './PortfolioChatbot';

export default function ChatbotWrapper() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <PortfolioChatbot />;
}
