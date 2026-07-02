import React from 'react';
import Reveal from './Reveal.jsx';
import { ADVOGADA, NAV_LINKS, whatsappLink, WHATS_DEFAULT } from '../lib/site.js';
import { Events } from '../lib/analytics.js';
import { WhatsAppIcon, InstagramIcon } from './icons.jsx';

export default function Footer() {
  const ano = new Date().getFullYear();
  return (
    <footer className="bg-mogno-900 bg-grain text-ivory-200/80">
      {/* CTA final */}
      <div className="section border-b border-ivory-50/10">
        <Reveal className="container-x py-16 text-center sm:py-20">
          <span className="kicker text-champagne-light">Próximo passo</span>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-medium leading-[1.12] text-ivory-50 sm:text-4xl">
            Evite decidir no escuro sobre família, patrimônio ou sucessão.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-ivory-200/75">
            Envie uma mensagem breve pelo WhatsApp para entender quais
            informações reunir e quais caminhos podem ser avaliados.
          </p>
          <a
            href={whatsappLink(WHATS_DEFAULT, 'cta-final')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => Events.whatsappClick('cta-final')}
            className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-full bg-champagne px-8 py-4 text-sm font-semibold tracking-wide text-mogno-900 transition-all duration-300 hover:bg-champagne-light hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Entender próximos passos
          </a>
        </Reveal>
      </div>

      {/* Rodape */}
      <div className="section">
        <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-display text-xl font-semibold text-ivory-50">Patrícia Sacramento</p>
            <p className="mt-1 text-xs uppercase tracking-widee text-champagne-light">{ADVOGADA.role}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory-200/60">
              Advocacia de família, sucessões e planejamento patrimonial em
              Salvador/BA.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <p className="text-xs font-semibold uppercase tracking-wide text-ivory-200/50">Navegação</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-ivory-200/75 transition-colors hover:text-champagne-light">{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ivory-200/50">Contato</p>
            <ul className="mt-4 space-y-2.5 text-sm text-ivory-200/75">
              <li>{ADVOGADA.address.line1}</li>
              <li>{ADVOGADA.address.line2}</li>
              <li>{ADVOGADA.phoneDisplay}</li>
              <li>{ADVOGADA.horario}</li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ivory-200/50">Acompanhe</p>
            <div className="mt-4 flex gap-3">
              <a
                href={whatsappLink(WHATS_DEFAULT, 'footer')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => Events.whatsappClick('footer')}
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory-50/15 text-ivory-200/80 transition-colors hover:border-champagne hover:text-champagne-light"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a
                href={ADVOGADA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => Events.instagramClick()}
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory-50/15 text-ivory-200/80 transition-colors hover:border-champagne hover:text-champagne-light"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="container-x border-t border-ivory-50/10 py-7">
          <p className="text-xs leading-relaxed text-ivory-200/45">
            Conteúdo de caráter meramente informativo, em conformidade com o
            Código de Ética e Disciplina da OAB. Este site não constitui oferta
            de serviços, captação de clientela ou promessa de resultados.
          </p>
          <p className="mt-4 text-xs text-ivory-200/45">
            © {ano} Patrícia Sacramento | Advocacia e Consultoria. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
