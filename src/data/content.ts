import { Area } from '../types';

export const nav = [
  { href: '/grupo', label: 'Grupo' },
  { href: '/areas', label: 'Áreas' },
  { href: '/activos', label: 'Activos' },
  { href: '/equipo', label: 'Equipo' },
  { href: '/institucional', label: 'Institucional' },
  { href: '/contacto', label: 'Contacto' },
];

export const areas: Area[] = [
  {
    slug: 'real-estate',
    name: 'Real Estate',
    line: 'El conocimiento del activo.',
    description: 'Comercialización de inmuebles y carteras con una lectura precisa del producto, del mercado y del comprador.',
    audience: 'Propietarios, sociedades patrimoniales, empresas y entidades con activos inmobiliarios en Catalunya.',
    capabilities: [
      'Análisis del activo y posicionamiento comercial',
      'Estrategia de venta de activos y carteras',
      'Identificación y cualificación de compradores',
      'Coordinación de visitas, propuestas y negociación'
    ],
    operations: 'Residencial, oficinas, locales, industrial, suelo y activos singulares.'
  },
  {
    slug: 'investment',
    name: 'Investment',
    line: 'Capital con perspectiva.',
    description: 'Análisis de oportunidades inmobiliarias y estructuración de estrategias orientadas a la creación de valor.',
    audience: 'Inversores privados, family offices y clientes institucionales con objetivos inmobiliarios definidos.',
    capabilities: [
      'Selección de oportunidades inmobiliarias',
      'Análisis de rentabilidad y escenarios',
      'Definición de estrategia de inversión',
      'Seguimiento de adquisición y desinversión'
    ],
    operations: 'Inversión patrimonial, reposicionamiento, desarrollo y operaciones de valor añadido.'
  },
  {
    slug: 'advisory',
    name: 'Advisory',
    line: 'Criterio para decidir.',
    description: 'Asesoramiento estratégico para ordenar la información y acompañar decisiones inmobiliarias complejas.',
    audience: 'Empresas, propietarios, fondos, servicers y sociedades patrimoniales.',
    capabilities: [
      'Análisis de carteras y alternativas',
      'Estrategias de desinversión',
      'Estructuración del proceso y la información',
      'Coordinación de interlocutores y seguimiento'
    ],
    operations: 'Mandatos de venta, revisión de carteras, búsqueda de compradores y asesoramiento inmobiliario.'
  }
];

export const teamAreas = [
  {
    area: 'Dirección',
    title: 'Visión y seguimiento',
    description: 'Coordina las prioridades del grupo y el seguimiento de las operaciones.'
  },
  {
    area: 'Comercial',
    title: 'Relación con el cliente',
    description: 'Acompaña la búsqueda de activos, las visitas y la negociación.'
  },
  {
    area: 'Coordinación',
    title: 'Continuidad operativa',
    description: 'Organiza las tareas y la información entre clientes y áreas de trabajo.'
  },
  {
    area: 'Contabilidad',
    title: 'Control económico',
    description: 'Realiza el seguimiento de honorarios, facturas y liquidaciones.'
  },
  {
    area: 'Análisis PBC',
    title: 'Revisión documental',
    description: 'Revisa los expedientes y la documentación requerida para cada operación.'
  }
];

export const principles = [
  {
    title: 'Criterio',
    description: 'Analizar antes de recomendar. Cada activo requiere una lectura propia.'
  },
  {
    title: 'Discreción',
    description: 'Compartir la información con los interlocutores y permisos adecuados.'
  },
  {
    title: 'Transparencia',
    description: 'Explicar el alcance, las alternativas y las condiciones de cada proceso.'
  },
  {
    title: 'Ejecución',
    description: 'Definir responsabilidades y acompañar cada hito.'
  },
  {
    title: 'Continuidad',
    description: 'Construir relaciones que trasciendan una operación.'
  }
];

export const institutionalServices = [
  { title: 'Gestión de cartera', description: 'Lectura del producto, segmentación y estrategia.' },
  { title: 'Comercialización', description: 'Posicionamiento, interlocución y gestión del proceso de venta.' },
  { title: 'Mandatos', description: 'Objetivos, responsabilidades y seguimiento definidos.' },
  { title: 'Venta de activos', description: 'Proceso adaptado al activo y al contexto de mercado.' },
  { title: 'Buyer sourcing', description: 'Identificación y cualificación de contrapartes.' },
  { title: 'Advisory', description: 'Información estructurada para decidir.' }
];
