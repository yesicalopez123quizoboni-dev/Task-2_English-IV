import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const FloatingBackToTop: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      id="floating-back-to-top"
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-emerald-800 text-white shadow-lg shadow-emerald-950/20 transition-all duration-300 hover:bg-emerald-700 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp className="h-5 w-5 stroke-[2.5]" />
    </button>
  );
};
