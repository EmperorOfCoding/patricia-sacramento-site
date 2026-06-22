// Informacoes de negocio centralizadas. Edite somente este arquivo para
// atualizar contato, endereco, links e mensagens em todo o site.
//
// Dados confirmados via Google Business Profile (perfil publico).
// OAB nao incluida: numero nao confirmado. Ao confirmar, preencha OAB abaixo
// e habilite a exibicao nos componentes Hero/About/Footer.

export const ADVOGADA = {
  name: 'Patrícia Sacramento',
  fullName: 'Patrícia Sacramento | Advocacia e Consultoria',
  role: 'Advocacia e Consultoria',
  // Numero de OAB ainda nao confirmado. Mantenha vazio ate validar.
  oab: '',
  experienciaAnos: 13,
  phoneDisplay: '(71) 99136-2717',
  // Formato internacional para wa.me (55 + DDD + numero).
  whatsappNumber: '5571991362717',
  instagramUrl: 'https://www.instagram.com/patricia_sacra/',
  instagramHandle: '@patricia_sacra',
  email: '',
  address: {
    line1: 'R. Juazeiro, 327',
    line2: 'Alto do Coqueirinho, Salvador - BA',
    line3: '41610-258',
  },
  geo: { lat: -12.9442373, lng: -38.3713475 },
  horario: 'Seg a Sex, 9h às 17h',
  // Link do Google Maps para o perfil do escritorio.
  mapsUrl: 'https://share.google/Rmu8QerbXgVnvmJ9n',
  // Embed do mapa centralizado no endereco (sem necessidade de API key).
  mapsEmbedUrl:
    'https://www.google.com/maps?q=R.+Juazeiro,+327+-+Alto+do+Coqueirinho,+Salvador+-+BA,+41610-258&output=embed',
};

// Parametros de UTM aplicados aos links de WhatsApp para rastreio de origem.
const UTM = {
  utm_source: 'site',
  utm_medium: 'cta',
  utm_campaign: 'lp-advocacia',
};

// Monta um link wa.me com mensagem pre-preenchida e UTM por origem (term).
export function whatsappLink(
  message = 'Olá, Dra. Patrícia. Vim pelo site e gostaria de entender qual o melhor caminho jurídico para minha situação.',
  term = 'geral'
) {
  const params = new URLSearchParams({ ...UTM, utm_term: term });
  return `https://wa.me/${ADVOGADA.whatsappNumber}?text=${encodeURIComponent(
    message
  )}&${params.toString()}`;
}

// Mensagem padrao do botao principal do header / CTAs gerais.
export const WHATS_DEFAULT =
  'Olá, Dra. Patrícia. Vim pelo site e gostaria de entender qual o melhor caminho jurídico para minha situação.';

// Mensagens personalizadas por situacao (bloco de conversao).
export const SITUACOES = [
  {
    id: 'divorcio',
    label: 'Divórcio',
    message:
      'Olá, Dra. Patrícia. Vim pelo site e gostaria de entender os próximos passos em uma situação de divórcio.',
  },
  {
    id: 'inventario',
    label: 'Inventário',
    message:
      'Olá, Dra. Patrícia. Vim pelo site e gostaria de orientação sobre inventário.',
  },
  {
    id: 'planejamento',
    label: 'Planejamento patrimonial',
    message:
      'Olá, Dra. Patrícia. Vim pelo site e gostaria de entender como organizar meu patrimônio com segurança jurídica.',
  },
  {
    id: 'doacao',
    label: 'Doação / Testamento',
    message:
      'Olá, Dra. Patrícia. Vim pelo site e gostaria de orientação sobre doação ou testamento.',
  },
  {
    id: 'outro',
    label: 'Outro assunto familiar',
    message:
      'Olá, Dra. Patrícia. Vim pelo site e gostaria de orientação jurídica em uma situação familiar/patrimonial.',
  },
];

// Links de navegacao do header (ancoras das secoes).
export const NAV_LINKS = [
  { label: 'Atuação', href: '#atuacao' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Contato', href: '#contato' },
];
