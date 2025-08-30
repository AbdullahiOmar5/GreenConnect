import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  // WhatsApp number: remove '+' and use only digits
  const whatsappNumber = "252619559755";
  const message = "Hi! I'm interested in learning more about your services.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-[#2F5233] text-white text-sm rounded-lg shadow-lg whitespace-nowrap animate-fade-in">
              Nagala soo xiriir WhatsApp
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#2F5233]"></div>
            </div>
          )}

          {/* Pulse animation */}
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-30 pointer-events-none"></div>

          {/* Main Button */}
          <button
            onClick={handleWhatsAppClick}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="group bg-[#25D366] hover:bg-[#20BA5A] text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 animate-bounce-slow relative"
            aria-label="Chat with us on WhatsApp"
          >
            <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </>
  );
};

export default WhatsAppFloat;