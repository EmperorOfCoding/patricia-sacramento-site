import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import { stagger, fadeUp, inView } from '../lib/motion.js';

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
          Decisões familiares e patrimoniais exigem clareza antes de qualquer
          passo.
        </SectionHeading>
        <Reveal>
          <p className="mt-5 max-w-2xl lede">
            Divórcio, inventário e planejamento patrimonial envolvem bens,
            vínculos familiares, documentos, prazos, riscos e consequências
            jurídicas. O papel da advocacia é ajudar você a compreender as
            possibilidades, os riscos e os caminhos adequados para o seu caso.
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
      </div>
    </section>
  );
}
