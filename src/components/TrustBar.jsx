import React from 'react';
import Reveal from './Reveal.jsx';

const ITEMS = [
  '13 anos de atuação',
  'Família, sucessões e patrimônio',
  'Atendimento em Salvador ou online',
  'Conversa inicial pelo WhatsApp',
];

export default function TrustBar() {
  return (
    <section aria-label="Compromissos do atendimento" className="border-y border-mogno-200/40 bg-ivory-50">
      <Reveal>
        <ul className="container-x section flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5">
          {ITEMS.map((item, i) => (
            <li key={item} className="flex items-center gap-8 text-sm font-semibold text-mogno-700">
              {i > 0 && <span className="hidden h-1 w-1 rounded-full bg-champagne sm:inline-block" aria-hidden="true" />}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
