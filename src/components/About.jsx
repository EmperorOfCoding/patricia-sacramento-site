import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Sparkles } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { fadeRight } from '../lib/motion.js';
import { ADVOGADA, whatsappLink, WHATS_DEFAULT } from '../lib/site.js';
import { Events } from '../lib/analytics.js';
import { WhatsAppIcon } from './icons.jsx';

const VALORES = [
  'Clareza e organização documental',
  'Segurança jurídica em cada decisão',
  'Respeito ao momento de vida de cada cliente',
];

export default function About() {
  return (
    <section id="sobre" className="section py-20 sm:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Imagem */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative order-2 mx-auto w-full max-w-md lg:order-1 lg:max-w-none"
        >
          <div className="absolute -bottom-4 -left-4 right-8 top-8 rounded-[2rem] bg-mogno-100/50" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-card ring-1 ring-mogno-900/5">
            <picture>
              <source srcSet="/img/patricia-retrato.webp" type="image/webp" />
              <img
                src="/img/patricia-retrato.jpg"
                width="799"
                height="760"
                loading="lazy"
                decoding="async"
                alt="Patrícia Sacramento, advogada, em seu escritório em Salvador."
                className="h-full w-full object-cover"
              />
            </picture>
          </div>
        </motion.div>

        {/* Texto */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="kicker">Sobre a profissional</span>
          </Reveal>
          <Reveal>
            <h2 className="mt-5 font-display text-3xl font-medium leading-[1.12] text-ink sm:text-4xl">
              Advocacia com estratégia, escuta e responsabilidade.
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-6 lede">
              Patrícia Sacramento atua na condução de famílias em temas de
              divórcio, inventário e planejamento patrimonial, com uma abordagem
              estratégica e humanizada. Há {ADVOGADA.experienciaAnos} anos
              auxiliando famílias a proteger o patrimônio, prevenir conflitos e
              tomar decisões seguras para o presente e o futuro.
            </p>
          </Reveal>

          <Reveal>
            <ul className="mt-8 space-y-3">
              {VALORES.map((v) => (
                <li key={v} className="flex items-center gap-3 text-[0.97rem] font-medium text-mogno-700">
                  <Sparkles className="h-[18px] w-[18px] flex-shrink-0 text-champagne-dark" strokeWidth={1.7} />
                  {v}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-mogno-600">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-champagne-dark" strokeWidth={1.7} />
                {ADVOGADA.address.line2}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-champagne-dark" strokeWidth={1.7} />
                {ADVOGADA.horario}
              </span>
            </div>
          </Reveal>

          {/* Espaco reservado para OAB apos confirmacao do numero. */}
          {ADVOGADA.oab && (
            <Reveal>
              <p className="mt-4 text-sm font-medium text-mogno-500">OAB/BA {ADVOGADA.oab}</p>
            </Reveal>
          )}

          <Reveal>
            <a
              href={whatsappLink(WHATS_DEFAULT, 'sobre')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => Events.whatsappClick('sobre')}
              className="btn-primary mt-9"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Falar com a Dra. Patrícia
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
