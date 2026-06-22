import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import { whatsappLink } from '../lib/site.js';
import { Events } from '../lib/analytics.js';

export const FAQ_ITEMS = [
  {
    q: 'Quando preciso de orientação jurídica em um divórcio?',
    a: 'Sempre que houver bens a partilhar, filhos, dúvidas sobre direitos e deveres ou divergências entre as partes. A orientação ajuda a compreender o regime de bens, as possibilidades e os próximos passos antes de qualquer decisão.',
  },
  {
    q: 'Qual a diferença entre inventário judicial e extrajudicial?',
    a: 'O inventário extrajudicial é feito em cartório e tende a ser mais ágil quando há consenso entre os herdeiros e os requisitos legais são atendidos. O judicial ocorre perante o Poder Judiciário e é necessário em outras situações, como divergências ou determinadas condições dos herdeiros.',
  },
  {
    q: 'É possível fazer planejamento patrimonial em vida?',
    a: 'Sim. Existem instrumentos jurídicos que permitem organizar o patrimônio ainda em vida, com o objetivo de prevenir conflitos e dar mais previsibilidade às decisões. O caminho adequado depende da análise de cada caso.',
  },
  {
    q: 'Doação substitui testamento?',
    a: 'São instrumentos diferentes, com efeitos e momentos distintos. Em alguns casos podem se complementar. A escolha depende dos objetivos da família e exige análise jurídica individualizada.',
  },
  {
    q: 'Quais documentos costumam ser necessários em um inventário?',
    a: 'De modo geral, documentos pessoais do falecido e dos herdeiros, certidões e a relação de bens e dívidas. A lista exata varia conforme o caso e é definida após a análise inicial.',
  },
  {
    q: 'O atendimento pode ser online?',
    a: 'Sim. O primeiro contato pode ser feito pelo WhatsApp, e o atendimento pode ocorrer de forma presencial em Salvador ou online, conforme a necessidade e a preferência do cliente.',
  },
  {
    q: 'Como funciona o primeiro contato?',
    a: 'Você descreve brevemente a situação que precisa organizar. A partir disso, a equipe compreende o contexto e indica quais informações são necessárias para orientar os próximos passos.',
  },
];

function Item({ item, isOpen, onToggle, index }) {
  const panelId = `faq-panel-${index}`;
  const btnId = `faq-btn-${index}`;
  return (
    <div className="border-b border-mogno-200/50">
      <h3>
        <button
          id={btnId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 py-5 text-left"
        >
          <span className="font-display text-lg font-medium text-ink sm:text-xl">{item.q}</span>
          <span
            className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-mogno-300/60 text-mogno-600 transition-all duration-300 ${
              isOpen ? 'rotate-45 border-champagne bg-champagne/10 text-mogno-800' : ''
            }`}
          >
            <Plus className="h-4 w-4" />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={btnId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-12 text-[0.97rem] leading-relaxed text-mogno-600">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="duvidas" className="section py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeading kicker="Dúvidas frequentes">
            Respostas claras para as perguntas mais comuns.
          </SectionHeading>
          <Reveal>
            <p className="mt-6 text-sm leading-relaxed text-mogno-500">
              As respostas têm caráter informativo e não substituem uma análise
              jurídica individualizada.{' '}
              <a
                href={whatsappLink(
                  'Olá, Dra. Patrícia. Vim pelo site e tenho uma dúvida que não encontrei nas perguntas frequentes.',
                  'faq'
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => Events.whatsappClick('faq')}
                className="font-semibold text-mogno-700 underline decoration-champagne underline-offset-4"
              >
                Tem outra dúvida? Fale com a equipe.
              </a>
            </p>
          </Reveal>
        </div>

        <Reveal className="lg:pt-2">
          <div>
            {FAQ_ITEMS.map((item, i) => (
              <Item
                key={i}
                index={i}
                item={item}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
