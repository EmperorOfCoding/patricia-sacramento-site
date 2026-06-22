import React, { useEffect, useState } from 'react';
import { whatsappLink, WHATS_DEFAULT } from '../lib/site.js';
import { Events } from '../lib/analytics.js';
import { WhatsAppIcon } from './icons.jsx';

// Botao flutuante de WhatsApp: aparece apos um leve scroll.
export default function WhatsAppFloatingButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={whatsappLink(WHATS_DEFAULT, 'flutuante')}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => Events.whatsappClick('flutuante')}
      aria-label="Falar pelo WhatsApp"
      className={`fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-mogno-700 text-ivory-50 shadow-card transition-all duration-300 hover:bg-mogno-800 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <span className="absolute inset-0 rounded-full bg-mogno-700/60 motion-safe:animate-pulse-ring" aria-hidden="true" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </a>
  );
}
