import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { stagger, fadeUp, inView } from '../lib/motion.js';
import { SITUACOES, whatsappLink } from '../lib/site.js';
import { Events } from '../lib/analytics.js';
import { WhatsAppIcon } from './icons.jsx';

export default function ConversionQuiz() {
  return (
    <section id="conversa" className="relative overflow-hidden bg-mogno-900 bg-grain py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-mogno-700/40 blur-3xl" />
      <div className="container-x section relative text-center">
        <Reveal>
          <span className="kicker text-champagne-light">Qual é a sua situação?</span>
        </Reveal>
        <Reveal>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-medium leading-[1.12] text-ivory-50 sm:text-4xl">
            Escolha o tema mais próximo do seu caso e fale diretamente pelo
            WhatsApp.
          </h2>
        </Reveal>
        <Reveal>
          <p className="mx-auto mt-5 max-w-xl text-ivory-200/75">
            Cada opção abre uma conversa com uma mensagem inicial pronta. Você
            ajusta como preferir antes de enviar.
          </p>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2"
        >
          {SITUACOES.map(({ id, label, message }) => (
            <motion.a
              key={id}
              href={whatsappLink(message, `quiz-${id}`)}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              onClick={() => Events.whatsappClick(`quiz-${id}`)}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-ivory-50/12 bg-ivory-50/[0.05] px-6 py-5 text-left
                         transition-all duration-300 hover:-translate-y-1 hover:border-champagne/50 hover:bg-ivory-50/[0.09]"
            >
              <span className="flex items-center gap-3">
                <WhatsAppIcon className="h-5 w-5 text-champagne-light" />
                <span className="font-medium text-ivory-50">{label}</span>
              </span>
              <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-ivory-200/50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-champagne-light" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
