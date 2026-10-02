import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { teamAreas } from '../../data/content';

export const metadata: Metadata = {
  title: 'Equipo',
  description: 'Un equipo multidisciplinar con responsabilidades compartidas al servicio de cada operación.'
};

export default function EquipoPage() {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">EQUIPO</p>
          <h1>
            Personas. Criterio.<br />
            <em>Responsabilidad.</em>
          </h1>
          <p>Especialización y coordinación al servicio de cada operación.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Un equipo.<br />Responsabilidades compartidas.</h2>
          <p style={{ marginTop: '20px', color: 'var(--muted)', fontSize: '18px' }}>
            Comercialización, coordinación, dirección, contabilidad y análisis documental trabajan coordinadamente sobre una misma operación.
          </p>
        </div>

        <div className="team-areas">
          {teamAreas.map((item, i) => (
            <article key={item.area}>
              <span className="team-area-number" aria-hidden="true">0{i + 1}</span>
              <p className="eyebrow">{item.area}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section pale">
        <p className="eyebrow">CONTACTO</p>
        <h2>Hablemos de su proyecto.</h2>
        <p style={{ marginTop: '20px', color: 'var(--muted)', maxWidth: '600px' }}>
          Cuéntenos qué necesita y el equipo de ORBANIX GROUP atenderá su consulta con la máxima diligencia.
        </p>
        <Link href="/contacto" className="button gold" style={{ marginTop: '30px' }}>
          Contactar con ORBANIX <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </>
  );
}
