import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { areas } from '../../../data/content';

interface AreaProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return areas.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }: AreaProps): Promise<Metadata> {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) return { title: 'Área no encontrada' };

  return {
    title: `${area.name} · Áreas`,
    description: area.description,
  };
}

export default async function AreaDetailPage({ params }: AreaProps) {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">ÁREAS / {area.name.toUpperCase()}</p>
          <h1>
            {area.name}.<br />
            <em>{area.line}</em>
          </h1>
          <p>{area.description}</p>
        </div>
      </section>

      <section className="section area-detail">
        <aside>
          <p className="eyebrow">PARA QUIÉN</p>
          <h2>
            Una respuesta<br />
            a cada objetivo.
          </h2>
          <p>{area.audience}</p>
          <Link href="/areas" className="text-link">
            Todas las áreas <span aria-hidden="true">↗</span>
          </Link>
        </aside>

        <div>
          <p className="eyebrow">QUÉ HACEMOS</p>
          <h2>Capacidades.</h2>
          <ul className="ruled-list">
            {area.capabilities.map((cap, i) => (
              <li key={i}>{cap}</li>
            ))}
          </ul>

          <div className="scope">
            <p className="eyebrow">TIPOS DE OPERACIÓN</p>
            <p className="lead">{area.operations}</p>
          </div>

          <div style={{ marginTop: '45px' }}>
            <Link href="/contacto" className="button gold">
              Solicitar propuesta en {area.name} <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
