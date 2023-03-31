const NavigationsItems = [
  {
    title: 'Reviews',
    featured: false,
    icon: 'mdi-message-draw',
    route: '/reviews',
  },

  {
    title: 'Performance',
    featured: false,
    icon: 'mdi-google-analytics',
    route: '/performance',
  },

  {
    title: 'Conexões',
    featured: false,
    icon: 'mdi-hubspot',
    route: '/relationship',
  },

  // {
  //   title: 'Planejamento',
  //   featured: false,
  //   private: true,
  //   icon: 'mdi-file-document-box-multiple',
  //   route: '/planning',
  // },

  {
    title: 'Meu histórico',
    featured: false,
    icon: 'mdi-history',
    route: '/history',
  },

  {
    title: 'Dados da Matrícula',
    featured: false,
    icon: 'mdi-book-multiple',
    route: '/stats',
  },

  {
    title: 'Snapshot da Matrícula',
    icon: 'mdi-open-in-new',
    url: 'https://api.ufabcnext.com/snapshot',
  },

  {
    title: 'Configurações',
    featured: false,
    icon: 'mdi-cog',
    route: '/settings',
  },

  {
    title: 'Grupos no WhatsApp',
    featured: true,
    icon: 'mdi-whatsapp',
    url: 'https://rebrand.ly/ufabc-grupos-whatsapp',
  },

  {
    title: 'Apoie o UFABC next',
    featured: true,
    icon: 'mdi-bank',
    route: '/donate',
  },
];

export default NavigationsItems;