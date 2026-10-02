import { PublicAsset } from '../types';

export const assets: PublicAsset[] = [
  {
    id: 'obx-bcn-eixample-01',
    reference: 'OBX-BCN-01',
    title: 'Edificio Residencial Chaflán en Eixample Dret',
    description: 'Edificio residencial modernista con fachada catalogada y división horizontal constituida. Excelente ubicación en zona prime de Barcelona con alto potencial de reversión de rentas y optimización patrimonial.',
    province: 'Barcelona',
    municipality: 'Barcelona',
    typology: 'Residencial',
    areaSqm: 2450,
    yieldBps: 480,
    strategy: 'Patrimonial / Value-Add',
    possession: 'Alquilado parcialmente',
    status: 'AVAILABLE',
    priceCents: 1250000000, // 12.5M€
    address: 'Eixample Dret, Barcelona',
    featured: true
  },
  {
    id: 'obx-bcn-22aroba-02',
    reference: 'OBX-BCN-02',
    title: 'Edificio de Oficinas Corporativo en Distrito 22@',
    description: 'Inmueble de oficinas de última generación con certificación LEED Gold y arrendatario tecnológico de primer nivel. Estructura flexible con terrazas privadas y plazas de aparcamiento subterráneas.',
    province: 'Barcelona',
    municipality: 'Barcelona',
    typology: 'Oficinas',
    areaSqm: 4200,
    yieldBps: 620,
    strategy: 'Core / Rentabilidad',
    possession: 'Arrendado a largo plazo',
    status: 'AVAILABLE',
    priceCents: 2180000000, // 21.8M€
    address: 'Distrito 22@, Barcelona',
    featured: true
  },
  {
    id: 'obx-gir-costa-03',
    reference: 'OBX-GIR-03',
    title: 'Complejo Hotelero y Finca Singular en Baix Empordà',
    description: 'Propiedad singular con más de 12 hectáreas de terreno y edificación histórica rehabilitada con licencia hotelera activa. Entorno natural consolidado con proyección turística de alto standing.',
    province: 'Girona',
    municipality: 'Begur',
    typology: 'Hotelero / Singular',
    areaSqm: 3800,
    yieldBps: 710,
    strategy: 'Operativa / Hospitality',
    possession: 'En explotación',
    status: 'AVAILABLE',
    priceCents: 890000000, // 8.9M€
    address: 'Baix Empordà, Girona',
    featured: true
  },
  {
    id: 'obx-tgn-logistics-04',
    reference: 'OBX-TGN-04',
    title: 'Plataforma Logística e Industrial en Corredor Mediterráneo',
    description: 'Nave logística clase A de reciente construcción con 18 muelles de carga, altura libre de 12 metros y acceso inmediato a autopista AP-7 y puerto de Tarragona. Arrendada con contrato garantizado.',
    province: 'Tarragona',
    municipality: 'Valls',
    typology: 'Industrial / Logístico',
    areaSqm: 18500,
    yieldBps: 685,
    strategy: 'Core+ / Rentabilidad',
    possession: 'Arrendado (Triple Neto)',
    status: 'AVAILABLE',
    priceCents: 1540000000, // 15.4M€
    address: 'Polígono Logístico, Tarragona',
    featured: false
  },
  {
    id: 'obx-lld-suelo-05',
    reference: 'OBX-LLD-05',
    title: 'Suelo Finalista Residencial para Promoción Unifamiliar',
    description: 'Parcela urbana consolidada con planeamiento aprobado y licencia directa para la construcción de conjunto residencial plurifamiliar o unifamiliar adosado. Zona residencial en expansión de Lleida.',
    province: 'Lleida',
    municipality: 'Lleida',
    typology: 'Suelo',
    areaSqm: 6200,
    yieldBps: null,
    strategy: 'Promoción / Desarrollo',
    possession: 'Libre de cargas',
    status: 'AVAILABLE',
    priceCents: 320000000, // 3.2M€
    address: 'Zona Alta, Lleida',
    featured: false
  },
  {
    id: 'obx-bcn-comercial-06',
    reference: 'OBX-BCN-06',
    title: 'Local Comercial en Rentabilidad en Rambla Catalunya',
    description: 'Excelente local comercial en tramo peatonal de máxima afluencia comercial. Operador consolidado de primer nivel internacional con contrato de obligado cumplimiento por 8 años.',
    province: 'Barcelona',
    municipality: 'Barcelona',
    typology: 'Comercial / Retail',
    areaSqm: 560,
    yieldBps: 540,
    strategy: 'Core / Rentas Prime',
    possession: 'Arrendado',
    status: 'RESERVED',
    priceCents: 675000000, // 6.75M€
    address: 'Rambla Catalunya, Barcelona',
    featured: false
  }
];

export function formatMoney(cents: number | null): string {
  if (cents === null) return 'Precio a consultar';
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0
  }).format(cents / 100);
}

export function formatNumber(n: number | null): string {
  if (n === null) return 'No informada';
  return new Intl.NumberFormat('es-ES', {
    maximumFractionDigits: 2
  }).format(n);
}
