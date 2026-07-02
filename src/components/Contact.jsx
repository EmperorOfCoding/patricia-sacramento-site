import React from 'react';
import { Clock, MapPin, Phone, ShieldCheck } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import { ADVOGADA, whatsappLink, WHATS_DEFAULT } from '../lib/site.js';
import { Events } from '../lib/analytics.js';
import { WhatsAppIcon, InstagramIcon } from './icons.jsx';

const CONTACT_POINTS = [
  {
    icon: Phone,
    label: 'WhatsApp',
    value: ADVOGADA.phoneDisplay,
  },
  {
    icon: Clock,
    label: 'Horário',
    value: ADVOGADA.horario,
  },
  {
    icon: MapPin,
    label: 'Atendimento',
    value: 'Salvador/BA e online',
  },
];

export default function Contact() {
  return (
    <section id="contato" className="section bg-ivory-50 py-20 sm:py-28">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div>
            <SectionHeading kicker="Contato">
              Comece com uma mensagem curta e decida com mais clareza.
            </SectionHeading>
            <Reveal>
              <p className="mt-5 lede">
                O primeiro contato não exige relato completo nem envio imediato
                de documentos. Informe o tema do seu caso e entenda quais dados
                precisam ser reunidos com cuidado.
              </p>
            </Reveal>

            <Reveal>
              <div className="mt-8 rounded-2xl border border-mogno-200/50 bg-ivory p-6 shadow-soft">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 flex-shrink-0 text-champagne-dark" strokeWidth={1.8} />
                  <p className="text-sm leading-relaxed text-mogno-600">
                    Para preservar sua privacidade, comece descrevendo apenas o
                    essencial. Documentos e detalhes sensíveis devem ser tratados
                    no momento adequado.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappLink(WHATS_DEFAULT, 'contato-final')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => Events.whatsappClick('contato-final')}
                  className="btn-primary"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Enviar mensagem breve
                </a>
                <a
                  href={ADVOGADA.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => Events.instagramClick()}
                  className="btn-outline"
                >
                  <InstagramIcon className="h-4 w-4" />
                  Ver Instagram
                </a>
              </div>
            </Reveal>

            <Reveal>
              <ul className="mt-9 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {CONTACT_POINTS.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="rounded-2xl border border-mogno-200/45 bg-ivory p-4">
                    <Icon className="h-5 w-5 text-champagne-dark" strokeWidth={1.7} />
                    <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-mogno-400">
                      {label}
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-snug text-mogno-800">
                      {value}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal>
            <div className="grid h-full gap-4 rounded-3xl border border-mogno-200/50 bg-ivory p-4 shadow-soft">
              <div className="overflow-hidden rounded-2xl border border-mogno-200/50">
                <iframe
                  title="Localização do escritório de Patrícia Sacramento em Salvador"
                  src={ADVOGADA.mapsEmbedUrl}
                  width="100%"
                  height="360"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="px-2 pb-2 text-sm leading-relaxed text-mogno-600">
                <strong className="font-semibold text-mogno-800">{ADVOGADA.address.line1}</strong>
                <br />
                {ADVOGADA.address.line2}, {ADVOGADA.address.line3}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
