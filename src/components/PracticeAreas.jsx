import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import { stagger, fadeUp, inView } from '../lib/motion.js';
import { whatsappLink } from '../lib/site.js';
import { Events } from '../lib/analytics.js';
import { WhatsAppIcon } from './icons.jsx';

const AREAS = [
  {
    id: 'divorcio',
    image: 'https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Divórcio e partilha',
    text: 'Orientação para compreender regime de bens, documentos, riscos e caminhos possíveis antes de tomar decisões.',
    message: 'Olá, Dra. Patrícia. Vim pelo site. Estou em uma situação de divórcio ou partilha e gostaria de entender quais informações devo reunir.',
  },
  {
    id: 'inventario',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
    title: 'Inventário',
    text: 'Apoio para organizar documentos, entender alternativas e avaliar o caminho adequado para a sucessão.',
    message: 'Olá, Dra. Patrícia. Vim pelo site. Preciso lidar com um inventário e gostaria de entender os primeiros passos.',
  },
  {
    id: 'planejamento',
    image: 'https://images.pexels.com/photos/7731330/pexels-photo-7731330.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Planejamento patrimonial',
    text: 'Análise preventiva para organizar bens, reduzir incertezas familiares e dar mais previsibilidade às decisões.',
    message: 'Olá, Dra. Patrícia. Vim pelo site. Gostaria de entender quais cuidados considerar no planejamento patrimonial.',
  },
  {
    id: 'doacao-testamento',
    image: 'https://images.pexels.com/photos/8145244/pexels-photo-8145244.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Doação e testamento',
    text: 'Orientação para avaliar limites legais, efeitos familiares e documentos antes de formalizar uma decisão.',
    message: 'Olá, Dra. Patrícia. Vim pelo site. Tenho dúvidas sobre doação ou testamento e gostaria de entender os cuidados jurídicos.',
  },
  {
    id: 'familia-sucessoes',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800',
    title: 'Família e sucessões',
    text: 'Orientação em demandas familiares e sucessórias que exigem clareza, documentação e tomada de decisão cuidadosa.',
    message: 'Olá, Dra. Patrícia. Vim pelo site. Tenho uma questão familiar ou sucessória e gostaria de entender por onde começar.',
  },
];

export default function PracticeAreas() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="atuacao" className="relative overflow-hidden bg-mogno-900 bg-grain py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/70 to-transparent" />
      <div className="container-x section relative">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <SectionHeading
            kicker="Áreas de atuação"
            light
            description="Selecione a área correspondente à sua necessidade para iniciarmos um atendimento seguro e personalizado. Cada cartão abre o WhatsApp com a mensagem adequada."
          >
            Escolha o tema e comece com uma mensagem simples.
          </SectionHeading>

          <Reveal>
            <div className="flex flex-col items-start lg:items-end">
              <div className="rounded-2xl border border-ivory-50/12 bg-ivory-50/[0.06] p-5 text-white/90 backdrop-blur">
                <p className="text-sm leading-relaxed">
                  A publicidade jurídica deve ser informativa. Por isso, o site
                  evita promessas de resultado e conduz você para uma análise
                  individualizada do caso.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={inView}
          className="relative mt-12 lg:px-16 xl:px-20"
        >
          {/* Mobile Scroll Indicator */}
          <div className="absolute -top-10 right-0 flex items-center gap-2 text-xs font-medium text-ivory-200/60 lg:hidden">
            Deslize para ver mais <ArrowRight className="h-3 w-3" />
          </div>

          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-12 pt-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-6"
          >
            {AREAS.map(({ id, image, title, text, message }) => (
              <motion.a
                key={id}
                href={whatsappLink(message, `area-${id}`)}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                onClick={() => {
                  Events.practiceAreaClick(title);
                  Events.whatsappClick(`area-${id}`);
                }}
                className="group relative flex h-[420px] w-[260px] shrink-0 snap-center flex-col justify-end overflow-hidden rounded-xl border border-ivory-50/10 transition-all duration-500 hover:-translate-y-2 hover:border-champagne/60 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] sm:h-[480px] sm:w-[300px]"
              >
                {/* Background Image */}
                <img 
                  src={image} 
                  alt={title} 
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                
                {/* Gradients for readability */}
                <div className="absolute inset-0 bg-mogno-900/20 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-mogno-900 via-mogno-900/80 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col p-6 sm:p-8">
                  <h3 className="font-display text-2xl font-bold uppercase leading-tight tracking-wider text-ivory-50 drop-shadow-lg sm:text-3xl">
                    {title}
                  </h3>
                  <div className="mt-3 overflow-hidden transition-all duration-500">
                    <p className="text-sm leading-relaxed text-ivory-100/90 drop-shadow-md">
                      {text}
                    </p>
                  </div>
                  
                  <span className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-champagne-light transition-colors group-hover:text-champagne">
                    <WhatsAppIcon className="h-4 w-4" />
                    Entender próximos passos
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Navigation Arrows - Desktop Only */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 hidden justify-between pointer-events-none lg:flex">
            <button
              onClick={() => scroll('left')}
              className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full border border-ivory-50/20 bg-mogno-900/80 text-ivory-50 backdrop-blur transition-all hover:scale-110 hover:border-champagne hover:bg-mogno-800 hover:text-champagne-light"
              aria-label="Rolar para esquerda"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full border border-ivory-50/20 bg-mogno-900/80 text-ivory-50 backdrop-blur transition-all hover:scale-110 hover:border-champagne hover:bg-mogno-800 hover:text-champagne-light"
              aria-label="Rolar para direita"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
