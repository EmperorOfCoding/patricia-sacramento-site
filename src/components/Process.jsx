import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import { stagger, fadeUp, inView } from '../lib/motion.js';
import { whatsappLink, WHATS_DEFAULT } from '../lib/site.js';
import { Events } from '../lib/analytics.js';
import { WhatsAppIcon } from './icons.jsx';

const ETAPAS = [
  {
    n: '01',
    title: 'Comece com pouco',
    text: 'Você envia uma mensagem breve pelo WhatsApp, sem anexar documentos ou expor detalhes sensíveis no primeiro contato.',
  },
  {
    n: '02',
    title: 'Entenda o que reunir',
    text: 'A conversa inicial ajuda a identificar quais informações e documentos podem ser relevantes para análise.',
  },
  {
    n: '03',
    title: 'Decida com mais clareza',
    text: 'Com riscos, alternativas e limites mais claros, você avalia o melhor próximo passo para a sua situação.',
  },
];

export default function Process() {
  return (
    <section id="como-funciona" className="section py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading kicker="Como funciona o atendimento" center>
          O primeiro contato foi pensado para reduzir fricção, não para expor sua vida inteira.
        </SectionHeading>

        <motion.ol
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="relative mt-16 grid gap-10 sm:grid-cols-3 lg:gap-8"
        >
          <span
            className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-champagne/50 to-transparent lg:block"
            aria-hidden="true"
          />
          {ETAPAS.map(({ n, title, text }) => (
            <motion.li key={n} variants={fadeUp} className="relative">
              <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-champagne/50 bg-ivory font-display text-xl font-semibold text-mogno-700 shadow-soft">
                {n}
              </span>
              <h3 className="mt-6 font-display text-xl font-medium text-ink">{title}</h3>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-mogno-600">{text}</p>
            </motion.li>
          ))}
        </motion.ol>

        <Reveal>
          <div className="mt-12 text-center">
            <a
              href={whatsappLink(WHATS_DEFAULT, 'processo')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => Events.whatsappClick('processo')}
              className="btn-primary"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Começar com uma mensagem breve
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
