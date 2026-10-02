import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { areas } from '../../data/content';

export const metadata: Metadata = {
  title: 'Áreas de Negocio',
  description: 'Conozca las tres especialidades complementarias de ORBANIX GROUP: Real Estate, Investment y Advisory.'
};

export default function AreasPage() {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">ÁREAS</p>
          <h1>
            Tres capacidades.<br />
            <em>Una visión integral.</em>
          </h1>
          <p>Conocimiento inmobiliario, inversión y asesoramiento estratégico.</p>
        </div>
      </section>

      <section className="section pale">
        <div className="area-grid">
          {areas.map((a, i) => (
            <Link key={a.slug} href={`/areas/${a.slug}`} className="area-tile">
              <span className="index">0{i + 1}</span>
              <h3>{a.name}</h3>
              <p>{a.description}</p>
              <span className="tile-link">
                Explorar el área <span aria-hidden="true">↗</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
