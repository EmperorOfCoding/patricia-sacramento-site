import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Scale, ShieldCheck, Star, ArrowRight } from 'lucide-react';
import { whatsappLink, WHATS_DEFAULT } from '../lib/site.js';
import { Events } from '../lib/analytics.js';
import { WhatsAppIcon } from './icons.jsx';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const STATS = [
  { value: '13+', label: 'Anos de atuação' },
  { value: '5', label: 'Frentes de orientação' },
  { value: '5,0', label: 'Avaliação no Google' },
  { value: 'BA', label: 'Salvador e atendimento online' },
];

export default function Hero() {
  const ref = useRef(null);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative overflow-hidden pt-[68px] sm:rounded-b-[3rem] lg:min-h-[760px]"
      style={{ backgroundColor: '#26130B' }}
    >
      <picture className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
        <source srcSet="/img/hero-bg.webp" type="image/webp" />
        <img
          src="/img/hero-bg.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center opacity-25"
        />
      </picture>
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-[#26130B] via-[#26130B]/92 to-[#26130B]/58" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-36 bg-gradient-to-t from-[#26130B] to-transparent" />

      <div className="container-x section relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-20 flex flex-col gap-8 py-10 sm:gap-10 sm:py-14 lg:min-h-[692px] lg:w-[50%] lg:justify-center lg:gap-10 lg:py-16 xl:w-[52%]"
        >
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <motion.span
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="inline-flex cursor-default items-center gap-2 rounded-full border border-ivory-50/15 bg-ivory-50/10 px-3.5 py-1.5 text-[0.65rem] sm:text-xs font-semibold uppercase tracking-wide text-ivory-100 backdrop-blur whitespace-nowrap"
            >
              <Scale className="h-3 w-3 text-champagne-light" strokeWidth={1.8} />
              Família, Sucessões e Patrimônio
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: -14, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
              className="hidden sm:flex cursor-default items-center gap-2.5 rounded-2xl bg-ivory-50/95 px-3.5 py-2 shadow-xl backdrop-blur transition-all duration-300 hover:shadow-champagne/20"
            >
              <div className="flex items-center gap-0.5 text-champagne-dark" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-champagne-dark" strokeWidth={0} />
                ))}
              </div>
              <div className="leading-tight">
                <p className="text-xs font-bold text-[#26130B]">
                  5,0 <span className="font-medium text-[#26130B]/70">no Google</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Meio: headline + CTAs */}
          <div className="max-w-2xl xl:max-w-[42rem]">
            <motion.h1
              variants={item}
              className="font-display text-4xl font-medium leading-[1.05] text-ivory-50 sm:text-5xl lg:text-[3.55rem] xl:text-[4.2rem]"
            >
              Antes de decidir, entenda seus caminhos em questões{' '}
              <span className="relative whitespace-nowrap text-champagne-light">
                familiares
                <svg className="absolute -bottom-1 left-0 w-full" height="10" viewBox="0 0 200 10" fill="none" aria-hidden="true">
                  <motion.path 
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 1, ease: 'easeOut' }}
                    d="M2 7C50 2 150 2 198 7" stroke="#DAC195" strokeWidth="2.8" strokeLinecap="round" />
                </svg>
              </span>
              {' '}e patrimoniais.
            </motion.h1>

            <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-ivory-200/85">
              Converse pelo WhatsApp para saber quais informações reunir, quais
              riscos observar e quais próximos passos podem ser avaliados.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={whatsappLink(WHATS_DEFAULT, 'hero')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => Events.whatsappClick('hero')}
                className="btn-gold"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Entender próximos passos
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#atuacao"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-ivory-50/25 px-7 py-3.5 text-sm font-semibold tracking-wide text-ivory-50 transition-all duration-300 hover:border-ivory-50/50 hover:bg-ivory-50/10"
              >
                Ver áreas de atuação
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </motion.div>

            <motion.p variants={item} className="mt-3 max-w-lg text-sm leading-relaxed text-ivory-200/68">
              Primeiro contato sem envio imediato de documentos. Uma
              descrição breve já ajuda a orientar a conversa inicial.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-6 grid gap-3 text-sm text-ivory-200/78 sm:grid-cols-3"
            >
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-champagne-light" strokeWidth={1.8} />
                Sigilo profissional
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-champagne-light" strokeWidth={1.8} />
                Salvador/BA
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-champagne-light" strokeWidth={1.8} />
                Online ou presencial
              </span>
            </motion.div>
          </div>

          <motion.ul
            variants={item}
            className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-ivory-50/15 pt-7 sm:grid-cols-4"
          >
            {STATS.map((s, idx) => (
              <motion.li 
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + idx * 0.1, duration: 0.5 }}
              >
                <span className="block font-display text-3xl font-semibold text-ivory-50 sm:text-4xl">
                  {s.value}
                </span>
                <span className="mt-1 block text-xs font-medium leading-snug text-ivory-200/70">
                  {s.label}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <div className="pointer-events-none absolute -bottom-8 -right-24 z-10 hidden h-[104%] w-[58%] items-end justify-end lg:flex xl:-right-32 xl:w-[56%]">
          <motion.img 
            initial={{ opacity: 0, filter: 'blur(10px)', x: 60 }}
            animate={{ opacity: 1, filter: 'blur(0px)', x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            src="/img/patricia-Photoroom.png" 
            alt="Patrícia Sacramento - Advogada" 
            className="h-full w-auto max-w-none object-contain object-right-bottom drop-shadow-2xl" 
          />
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-24 left-8 max-w-[15rem] rounded-2xl border border-ivory-50/14 bg-[#26130B]/78 p-4 text-ivory-50 shadow-2xl backdrop-blur"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-champagne-light">
              Primeiro contato
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ivory-100/82">
              Envie uma mensagem breve. Não é necessário expor detalhes sensíveis
              ou documentos antes da orientação inicial.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none relative z-0 -mt-10 flex justify-center px-4 sm:mt-0 lg:hidden">
        <motion.img 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          src="/img/patricia-Photoroom.png" 
          alt="Patrícia Sacramento - Advogada" 
          className="max-h-[500px] w-auto object-contain object-bottom drop-shadow-2xl" 
        />
        {/* Fade gradient para suavizar a transição com a proxima secao no mobile */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#26130B] to-transparent" />
      </div>
    </section>
  );
}
