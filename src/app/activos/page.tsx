import React from 'react';
import type { Metadata } from 'next';
import { assets } from '../../data/assets';
import CatalogFilter from '../../components/CatalogFilter';

export const metadata: Metadata = {
  title: 'Catálogo de Activos',
  description: 'Selección de oportunidades inmobiliarias e inversiones singulares en Catalunya con información autorizada e interlocución directa.'
};

export default function ActivosPage() {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">ACTIVOS</p>
          <h1>
            Una selección.<br />
            <em>Distintas oportunidades.</em>
          </h1>
          <p>Inmuebles en Catalunya, con información autorizada y una interlocución directa.</p>
        </div>
      </section>

      <section className="section pale catalog">
        <CatalogFilter initialAssets={assets} />
      </section>
    </>
  );
}
