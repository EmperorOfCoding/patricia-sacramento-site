// Camada de eventos de conversao para Google Tag Manager.
// Cada acao relevante empurra um evento para window.dataLayer, permitindo
// configurar tags/gatilhos no GTM sem alterar o codigo.

export function track(event, params = {}) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

export const Events = {
  whatsappClick: (term) => track('whatsapp_click', { cta_origin: term }),
  instagramClick: () => track('instagram_click'),
  scroll75: () => track('scroll_75'),
  practiceAreaClick: (area) => track('practice_area_click', { area }),
};
