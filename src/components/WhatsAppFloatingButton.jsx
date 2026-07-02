import React from 'react';
import { motion } from 'framer-motion';
import { whatsappLink, WHATS_DEFAULT } from '../lib/site.js';
import { Events } from '../lib/analytics.js';
import { WhatsAppIcon } from './icons.jsx';

// Botao flutuante de WhatsApp: sempre visivel
export default function WhatsAppFloatingButton() {
  return (
    <motion.a
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      href={whatsappLink(WHATS_DEFAULT, 'flutuante')}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => Events.whatsappClick('flutuante')}
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-[60px] w-[60px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 text-white shadow-xl transition-all duration-300 hover:bg-[#20bd5a] sm:w-auto"
    >
      <WhatsAppIcon className="h-8 w-8 sm:h-5 sm:w-5" />
      <span className="hidden whitespace-nowrap text-sm font-semibold sm:inline">
        Falar no WhatsApp
      </span>
    </motion.a>
  );
}
