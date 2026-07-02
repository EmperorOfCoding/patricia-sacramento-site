import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import { stagger, fadeUp, inView } from '../lib/motion.js';
import { whatsappLink, WHATS_DEFAULT } from '../lib/site.js';
import { Events } from '../lib/analytics.js';
import { WhatsAppIcon } from './icons.jsx';

const SITUACOES = [
  'Estou me separando e preciso entender meus direitos e deveres.',
  'Preciso resolver um inventário com segurança.',
  'Quero organizar meu patrimônio ainda em vida.',
  'Tenho dúvidas sobre doação, testamento ou partilha.',
  'Minha família precisa evitar conflitos futuros.',
];

export default function PainSection() {
  return (
    <section className="section py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading kicker="Por onde começar">
          Decisões familiares e patrimoniais ficam mais seguras quando você
          entende os riscos antes de agir.
        </SectionHeading>
        <Reveal>
          <p className="mt-5 max-w-2xl lede">
            Divórcio, inventário e planejamento patrimonial envolvem bens,
            vínculos familiares, documentos, prazos e consequências jurídicas.
            Antes de assinar, adiar ou decidir sozinho, vale compreender o que
            pode mudar no seu caso.
          </p>
        </Reveal>

        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SITUACOES.map((texto) => (
            <motion.li
              key={texto}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-mogno-200/50 bg-ivory-50 p-6
                         transition-all duration-300 hover:-translate-y-1 hover:border-champagne/60 hover:shadow-soft"
            >
              <span className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-champagne transition-transform duration-300 group-hover:scale-y-100" />
              <svg className="mb-4 h-7 w-7 text-champagne-dark" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 21s-7-4.35-7-10a4 4 0 017-2.65A4 4 0 0119 11c0 5.65-7 10-7 10z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-[0.97rem] font-medium leading-relaxed text-mogno-700">
                &ldquo;{texto}&rdquo;
              </p>
            </motion.li>
          ))}
        </motion.ul>

        <Reveal>
          <div className="mt-10 flex flex-col items-start gap-3 rounded-2xl border border-mogno-200/50 bg-ivory-50 p-6 shadow-soft sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-[0.98rem] leading-relaxed text-mogno-700">
              Você não precisa saber o caminho jurídico exato antes de entrar em
              contato. Comece com uma mensagem breve e entenda quais informações
              reunir.
            </p>
            <a
              href={whatsappLink(WHATS_DEFAULT, 'situacoes')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => Events.whatsappClick('situacoes')}
              className="btn-primary shrink-0"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Entender meu próximo passo
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
