import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

const FloatingButtons = () => {
  return (
    <>
      {/* Phone Button */}
      <a
        href="tel:+911234567890"
        className="fixed left-6 bottom-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Call us"
      >
        <Phone className="h-6 w-6" />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/911234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-6 bottom-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Message us on WhatsApp"
      >
        <MessageSquare className="h-6 w-6" />
      </a>
    </>
  );
};

export default FloatingButtons;