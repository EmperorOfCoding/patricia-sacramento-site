import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, whatsappLink, WHATS_DEFAULT, ADVOGADA } from '../lib/site.js';
import { Events } from '../lib/analytics.js';
import { WhatsAppIcon } from './icons.jsx';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const isSolid = scrolled || open;

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
        isSolid
          ? 'border-b border-mogno-200/40 bg-ivory-50/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x section flex h-[68px] items-center justify-between">
        <a href="#inicio" className="group flex items-center gap-3" aria-label="Início">
          <img
            src="/img/patricia-logo-Photoroom.png"
            alt="Logo Patrícia Sacramento"
            className={`h-12 w-auto object-contain transition-all duration-300 sm:h-14 ${isSolid ? 'brightness-0 opacity-80' : 'brightness-0 invert'}`}
          />
          <div className="flex flex-col leading-none">
            <span className={`font-display text-xl font-semibold tracking-tight transition-colors duration-300 ${isSolid ? 'text-ink' : 'text-white'}`}>
              Patrícia Sacramento
            </span>
            <span className={`mt-0.5 text-[0.62rem] font-medium uppercase tracking-wide transition-colors duration-300 ${isSolid ? 'text-champagne-dark' : 'text-champagne-light'}`}>
              {ADVOGADA.role}
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative text-sm font-medium transition-colors ${
                isSolid ? 'text-mogno-600 hover:text-ink' : 'text-ivory-200 hover:text-white'
              } after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-champagne after:transition-all after:duration-300 hover:after:w-full`}
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
            className={`hidden !px-5 !py-2.5 sm:inline-flex ${
              isSolid ? 'btn-primary' : 'btn-gold'
            }`}
          >
            <WhatsAppIcon className="h-4 w-4" />
            Falar com a Dra. Patrícia
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden transition-colors ${isSolid ? 'text-ink' : 'text-white'}`}
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
              Falar com a Dra. Patrícia
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
