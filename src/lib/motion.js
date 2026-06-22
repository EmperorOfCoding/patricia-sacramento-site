// Variantes reutilizaveis de animacao (Framer Motion).
// Movimento discreto e premium: fade + slide-up suave ao entrar na viewport.

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

// Entrada lateral suave (usada em imagens / blocos assimetricos).
export const fadeRight = {
  hidden: { opacity: 0, x: 36 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

// Container que escalona a entrada dos filhos.
export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.06 } },
};

// Configuracao padrao de viewport para whileInView.
export const inView = { once: true, amount: 0.2, margin: '0px 0px -80px 0px' };
