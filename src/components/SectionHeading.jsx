import React from 'react';
import Reveal from './Reveal.jsx';

// Cabecalho de secao reutilizavel.
// `children` e o titulo (H2); `description` e um texto de apoio opcional.
export default function SectionHeading({ kicker, children, description, center = false, light = false }) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {kicker && (
        <Reveal>
          <span className={`kicker ${light ? 'text-champagne-light' : ''}`}>{kicker}</span>
        </Reveal>
      )}
      <Reveal>
        <h2
          className={`mt-5 font-display text-3xl font-medium leading-[1.12] sm:text-4xl lg:text-[2.7rem] ${
            light ? 'text-ivory-50' : 'text-ink'
          }`}
        >
          {children}
        </h2>
      </Reveal>
      {description && (
        <Reveal>
          <p className={`mt-5 lede ${light ? 'text-ivory-200/80' : ''}`}>{description}</p>
        </Reveal>
      )}
    </div>
  );
}
