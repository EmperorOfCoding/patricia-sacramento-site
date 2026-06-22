import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Scale, MessageSquareText, ArrowRight } from 'lucide-react';
import { whatsappLink, WHATS_DEFAULT } from '../lib/site.js';
import { Events } from '../lib/analytics.js';
import { WhatsAppIcon } from './icons.jsx';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
// Sem opacity nas variantes do hero: o conteudo (H1 / LCP) pinta imediatamente
// e apenas desliza, evitando LCP "invisivel" dependente de JS.
const item = {
  hidden: { y: 22 },
  show: { y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const TRUST = [
  { icon: MapPin, label: 'Atendimento em Salvador/BA' },
  { icon: Scale, label: 'Advocacia familiar e patrimonial' },
  { icon: MessageSquareText, label: 'Atendimento consultivo' },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  // Parallax discreto nos elementos decorativos.
  const yDecor = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const yImg = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section id="inicio" ref={ref} className="relative overflow-hidden pt-[68px]">
      {/* Atmosfera: brilho quente + textura */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-24 h-[34rem] w-[34rem] rounded-full bg-mogno-100/50 blur-3xl" />
        <div className="absolute -left-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-champagne-light/30 blur-3xl" />
      </div>

      <div className="container-x section grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-24">
        {/* Coluna de texto */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span variants={item} className="kicker">
            Direito de Família, Sucessões e Patrimônio
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-medium leading-[1.08] text-ink sm:text-5xl lg:text-[3.6rem]"
          >
            Orientação jurídica estratégica para{' '}
            <span className="relative whitespace-nowrap text-mogno-700">
              famílias
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" fill="none" aria-hidden="true">
                <path d="M2 7C50 2 150 2 198 7" stroke="#BE9E63" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
            </span>
            , patrimônio e sucessões.
          </motion.h1>

          <motion.p variants={item} className="mt-7 max-w-xl lede">
            Condução humanizada e segura em divórcios, inventários, planejamento
            patrimonial, doações e testamentos.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappLink(WHATS_DEFAULT, 'hero')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => Events.whatsappClick('hero')}
              className="btn-primary"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Entender meu caso
            </a>
            <a href="#atuacao" className="btn-outline group">
              Conhecer áreas de atuação
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.ul variants={item} className="mt-12 grid gap-x-6 gap-y-4 sm:grid-cols-3">
            {TRUST.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-start gap-2.5">
                <Icon className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 text-champagne-dark" strokeWidth={1.7} />
                <span className="text-sm font-medium leading-snug text-mogno-600">{label}</span>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Coluna da imagem */}
        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          initial={{ scale: 0.97 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Moldura dourada deslocada (profundidade) */}
          <motion.div
            style={{ y: yDecor }}
            className="absolute -right-3 -top-3 bottom-6 left-6 rounded-[2rem] border border-champagne/50"
            aria-hidden="true"
          />

          <div className="relative overflow-hidden rounded-[2rem] shadow-card ring-1 ring-mogno-900/5">
            <motion.div style={{ y: yImg }}>
              <picture>
                <source srcSet="/img/patricia_hero.webp" type="image/webp" />
                <img
                  src="/img/patricia_hero.jpg"
                  width="1286"
                  height="1223"
                  alt="Patrícia Sacramento, advogada de família e sucessões em Salvador, em seu escritório."
                  className="h-full w-full object-cover"
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>
            </motion.div>
            {/* Veladura inferior para integrar com a paleta */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-mogno-900/20 via-transparent to-transparent" />
          </div>

          {/* Selo flutuante: experiencia */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="absolute -bottom-5 -left-2 flex items-center gap-3 rounded-2xl bg-ivory-50/95 px-5 py-3.5 shadow-gold backdrop-blur sm:-left-6"
          >
            <span className="font-display text-3xl font-semibold leading-none text-mogno-700">13</span>
            <span className="text-xs font-medium leading-tight text-mogno-600">
              anos conduzindo<br />famílias com cuidado
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
