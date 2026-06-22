import React from 'react';
import { motion } from 'framer-motion';
import { Scale, ScrollText, ShieldCheck, FileSignature, Users, ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import { stagger, fadeUp, inView } from '../lib/motion.js';
import { Events } from '../lib/analytics.js';

const AREAS = [
  {
    id: 'Divórcio e Partilha',
    icon: Scale,
    title: 'Divórcio e Partilha de Bens',
    text: 'Orientação jurídica para separações consensuais ou litigiosas, com análise patrimonial e condução cuidadosa dos próximos passos.',
  },
  {
    id: 'Inventário',
    icon: ScrollText,
    title: 'Inventário Judicial e Extrajudicial',
    text: 'Acompanhamento na organização documental, definição de caminhos possíveis e condução do procedimento sucessório.',
  },
  {
    id: 'Planejamento Patrimonial',
    icon: ShieldCheck,
    title: 'Planejamento Patrimonial',
    text: 'Estratégias jurídicas para organizar bens, reduzir conflitos familiares e dar previsibilidade às decisões patrimoniais.',
  },
  {
    id: 'Doação e Testamento',
    icon: FileSignature,
    title: 'Doação e Testamento',
    text: 'Orientação sobre instrumentos jurídicos que ajudam a estruturar a transmissão patrimonial com segurança.',
  },
  {
    id: 'Família e Sucessões',
    icon: Users,
    title: 'Família e Sucessões',
    text: 'Atuação consultiva em questões familiares com impacto jurídico, financeiro e patrimonial.',
  },
];

export default function PracticeAreas() {
  return (
    <section id="atuacao" className="relative overflow-hidden bg-mogno-900 bg-grain py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-mogno-700/40 blur-3xl" />
      <div className="container-x section relative">
        <SectionHeading kicker="Áreas de atuação" light>
          Caminhos jurídicos conduzidos com estratégia e cuidado.
        </SectionHeading>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {AREAS.map(({ id, icon: Icon, title, text }) => (
            <motion.a
              key={id}
              href="#conversa"
              variants={fadeUp}
              onClick={() => Events.practiceAreaClick(id)}
              className="group relative flex flex-col rounded-2xl border border-ivory-50/10 bg-ivory-50/[0.04] p-7
                         transition-all duration-300 hover:-translate-y-1.5 hover:border-champagne/40 hover:bg-ivory-50/[0.07]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-champagne/15 text-champagne-light
                               transition-colors duration-300 group-hover:bg-champagne/25">
                <Icon className="h-6 w-6" strokeWidth={1.6} />
              </span>
              <h3 className="mt-6 font-display text-xl font-medium text-ivory-50">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ivory-200/70">{text}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-champagne-light">
                Falar sobre isso
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
