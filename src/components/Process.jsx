import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading.jsx';
import { stagger, fadeUp, inView } from '../lib/motion.js';

const ETAPAS = [
  {
    n: '01',
    title: 'Primeiro contato',
    text: 'Você informa, de forma breve, qual situação precisa organizar.',
  },
  {
    n: '02',
    title: 'Análise inicial',
    text: 'A equipe compreende o contexto e identifica quais informações são necessárias.',
  },
  {
    n: '03',
    title: 'Orientação jurídica',
    text: 'Você recebe explicações sobre caminhos possíveis, documentos e riscos envolvidos.',
  },
  {
    n: '04',
    title: 'Condução estratégica',
    text: 'O caso é acompanhado com clareza, responsabilidade e comunicação objetiva.',
  },
];

export default function Process() {
  return (
    <section id="como-funciona" className="section py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading kicker="Como funciona o atendimento" center>
          Um processo simples, do primeiro contato à condução do caso.
        </SectionHeading>

        <motion.ol
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {/* Linha conectora (desktop) */}
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
      </div>
    </section>
  );
}
