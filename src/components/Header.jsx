import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, whatsappLink, WHATS_DEFAULT, ADVOGADA } from '../lib/site.js';
import { Events } from '../lib/analytics.js';
import { WhatsAppIcon } from './icons.jsx';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Trava o scroll do body quando o menu mobile esta aberto.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const onWhats = () => Events.whatsappClick('header');

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-mogno-200/40 bg-ivory-50/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x section flex h-[68px] items-center justify-between">
        <a href="#inicio" className="group flex flex-col leading-none" aria-label="Início">
          <span className="font-display text-xl font-semibold tracking-tight text-ink">
            Patrícia Sacramento
          </span>
          <span className="mt-0.5 text-[0.62rem] font-medium uppercase tracking-widee text-champagne-dark">
            {ADVOGADA.role}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-mogno-600 transition-colors hover:text-ink
                         after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-champagne
                         after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink(WHATS_DEFAULT, 'header')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onWhats}
            className="hidden btn-primary !px-5 !py-2.5 sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Falar com a equipe
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="border-t border-mogno-200/40 bg-ivory-50/98 backdrop-blur-md lg:hidden">
          <nav className="container-x section flex flex-col gap-1 py-5" aria-label="Navegação mobile">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-mogno-700 transition-colors hover:bg-mogno-50"
              >
                {l.label}
              </a>
            ))}
            <a
              href={whatsappLink(WHATS_DEFAULT, 'header-mobile')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => { onWhats(); setOpen(false); }}
              className="btn-primary mt-3 w-full"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Falar com a equipe
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
