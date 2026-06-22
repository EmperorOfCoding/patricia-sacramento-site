import React, { useState } from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import { ADVOGADA, whatsappLink } from '../lib/site.js';
import { Events } from '../lib/analytics.js';
import { WhatsAppIcon, InstagramIcon } from './icons.jsx';

const TEMAS = ['Divórcio', 'Inventário', 'Planejamento Patrimonial', 'Doação/Testamento', 'Outro'];

const EMPTY = { nome: '', whatsapp: '', cidade: '', tema: '', mensagem: '', lgpd: false };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [error, setError] = useState('');

  const update = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [field]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.whatsapp.trim()) {
      setError('Por favor, informe ao menos seu nome e WhatsApp.');
      return;
    }
    if (!form.lgpd) {
      setError('É necessário autorizar o contato para enviar.');
      return;
    }
    setError('');

    const tema = form.tema || 'Não especificado';
    const msg =
      `Olá, Dra. Patrícia. Vim pelo site.\n\n` +
      `Nome: ${form.nome}\n` +
      `Cidade: ${form.cidade || 'Não informada'}\n` +
      `Tema: ${tema}\n` +
      (form.mensagem ? `Mensagem: ${form.mensagem}\n` : '') +
      `\nGostaria de entender os próximos passos.`;

    Events.formSubmit(tema);
    window.open(whatsappLink(msg, 'formulario'), '_blank', 'noopener,noreferrer');
  };

  const field =
    'w-full rounded-xl border border-mogno-200/70 bg-ivory-50 px-4 py-3 text-[0.95rem] text-ink placeholder:text-mogno-300 transition-colors focus:border-champagne focus:outline-none';

  return (
    <section id="contato" className="section bg-ivory-50 py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Coluna de contato + mapa */}
        <div>
          <SectionHeading kicker="Contato">
            Vamos conversar sobre a sua situação.
          </SectionHeading>
          <Reveal>
            <p className="mt-5 lede">
              Entre em contato para compreender quais caminhos jurídicos podem
              ser avaliados para o seu caso. Atendimento presencial em Salvador
              ou online.
            </p>
          </Reveal>

          <Reveal>
            <ul className="mt-8 space-y-4 text-[0.95rem] text-mogno-700">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-champagne-dark" strokeWidth={1.7} />
                <span>
                  {ADVOGADA.address.line1}<br />
                  {ADVOGADA.address.line2}, {ADVOGADA.address.line3}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 flex-shrink-0 text-champagne-dark" strokeWidth={1.7} />
                {ADVOGADA.horario}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-champagne-dark" strokeWidth={1.7} />
                {ADVOGADA.phoneDisplay}
              </li>
            </ul>
          </Reveal>

          <Reveal>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={whatsappLink(undefined, 'contato')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => Events.whatsappClick('contato')}
                className="btn-whats"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={ADVOGADA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => Events.instagramClick()}
                className="btn-outline"
              >
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-8 overflow-hidden rounded-2xl border border-mogno-200/50 shadow-soft">
              <iframe
                title="Localização do escritório de Patrícia Sacramento em Salvador"
                src={ADVOGADA.mapsEmbedUrl}
                width="100%"
                height="240"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>

        {/* Formulário */}
        <Reveal>
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-mogno-200/50 bg-ivory p-7 shadow-soft sm:p-9"
            noValidate
          >
            <h3 className="font-display text-2xl font-medium text-ink">Solicitar contato</h3>
            <p className="mt-2 text-sm text-mogno-500">
              Preencha os campos abaixo. Não é necessário detalhar informações
              sensíveis neste primeiro contato.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="nome" className="mb-1.5 block text-sm font-medium text-mogno-700">Nome</label>
                <input id="nome" type="text" autoComplete="name" value={form.nome} onChange={update('nome')} className={field} placeholder="Seu nome" required />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="whatsapp" className="mb-1.5 block text-sm font-medium text-mogno-700">WhatsApp</label>
                  <input id="whatsapp" type="tel" inputMode="tel" autoComplete="tel" value={form.whatsapp} onChange={update('whatsapp')} className={field} placeholder="(71) 9____-____" required />
                </div>
                <div>
                  <label htmlFor="cidade" className="mb-1.5 block text-sm font-medium text-mogno-700">Cidade</label>
                  <input id="cidade" type="text" autoComplete="address-level2" value={form.cidade} onChange={update('cidade')} className={field} placeholder="Salvador" />
                </div>
              </div>
              <div>
                <label htmlFor="tema" className="mb-1.5 block text-sm font-medium text-mogno-700">Tema</label>
                <select id="tema" value={form.tema} onChange={update('tema')} className={field}>
                  <option value="">Selecione um tema</option>
                  {TEMAS.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="mensagem" className="mb-1.5 block text-sm font-medium text-mogno-700">Breve mensagem</label>
                <textarea id="mensagem" rows={3} value={form.mensagem} onChange={update('mensagem')} className={`${field} resize-none`} placeholder="Conte, em poucas palavras, o que você precisa organizar." />
              </div>
              <label className="flex items-start gap-3 text-sm text-mogno-600">
                <input type="checkbox" checked={form.lgpd} onChange={update('lgpd')} className="mt-0.5 h-4 w-4 flex-shrink-0 accent-mogno-700" required />
                <span>Autorizo o contato a partir das informações enviadas.</span>
              </label>
            </div>

            {error && <p className="mt-4 text-sm font-medium text-wine">{error}</p>}

            <button type="submit" className="btn-primary mt-6 w-full">
              <WhatsAppIcon className="h-4 w-4" />
              Enviar pelo WhatsApp
            </button>
            <p className="mt-3 text-center text-xs text-mogno-400">
              O envio abre o WhatsApp com a sua mensagem pronta.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
