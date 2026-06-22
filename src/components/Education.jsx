import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import { stagger, fadeUp, inView } from '../lib/motion.js';
import { whatsappLink } from '../lib/site.js';
import { Events } from '../lib/analytics.js';

const GUIAS = [
  {
    tag: 'Sucessões',
    title: 'Inventário judicial ou extrajudicial: o que muda?',
    text: 'O caminho extrajudicial pode ser mais ágil quando há consenso entre os herdeiros e requisitos atendidos; o judicial é necessário em outras situações. Entender qual se aplica ao seu caso evita retrabalho e insegurança.',
    term: 'guia-inventario',
  },
  {
    tag: 'Família',
    title: 'Divórcio: por que entender a partilha antes de decidir?',
    text: 'A forma como os bens foram adquiridos e o regime de casamento influenciam diretamente a partilha. Compreender esses pontos antes ajuda a tomar decisões mais conscientes e a reduzir conflitos.',
    term: 'guia-divorcio',
  },
  {
    tag: 'Patrimônio',
    title: 'Planejamento patrimonial: cuidado jurídico antes do conflito.',
    text: 'Organizar o patrimônio em vida, por meio de instrumentos jurídicos adequados, pode prevenir disputas familiares e dar previsibilidade às decisões. É um cuidado preventivo, não apenas reativo.',
    term: 'guia-planejamento',
  },
];

export default function Education() {
  return (
    <section className="section bg-ivory-50 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading kicker="Para entender melhor">
          Conteúdo claro para decisões mais conscientes.
        </SectionHeading>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="mt-12 grid gap-5 lg:grid-cols-3"
        >
          {GUIAS.map(({ tag, title, text, term }) => (
            <motion.article
              key={term}
              variants={fadeUp}
              className="flex flex-col rounded-2xl border border-mogno-200/50 bg-ivory p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="self-start rounded-full bg-mogno-100/70 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wide text-mogno-600">
                {tag}
              </span>
              <h3 className="mt-5 font-display text-xl font-medium leading-snug text-ink">{title}</h3>
              <p className="mt-3 flex-1 text-[0.93rem] leading-relaxed text-mogno-600">{text}</p>
              <a
                href={whatsappLink(
                  `Olá, Dra. Patrícia. Vim pelo site e tenho uma dúvida sobre o tema: ${title}`,
                  term
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => Events.whatsappClick(term)}
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-mogno-700"
              >
                Tenho uma dúvida sobre esse tema
                <ArrowRight className="h-4 w-4 text-champagne-dark transition-transform group-hover:translate-x-1" />
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
