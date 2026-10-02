export interface PublicAsset {
  id: string;
  reference: string;
  title: string;
  description: string | null;
  province: string;
  municipality: string;
  typology: string;
  areaSqm: number | null;
  yieldBps: number | null;
  strategy: string;
  possession: string;
  status: 'AVAILABLE' | 'RESERVED';
  priceCents: number | null;
  address: string | null;
  image?: string;
  featured?: boolean;
}

export interface Area {
  slug: string;
  name: string;
  line: string;
  description: string;
  audience: string;
  capabilities: string[];
  operations: string;
}
