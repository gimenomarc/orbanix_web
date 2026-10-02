import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { assets, formatMoney, formatNumber } from '../../../data/assets';

interface AssetProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return assets.map((asset) => ({
    id: asset.id,
  }));
}

export async function generateMetadata({ params }: AssetProps): Promise<Metadata> {
  const { id } = await params;
  const asset = assets.find((a) => a.id === id);
  if (!asset) return { title: 'Activo no encontrado' };

  return {
    title: `${asset.title} · Activos`,
    description: asset.description || `${asset.typology} en ${asset.municipality}, ${asset.province}.`
  };
}

export default async function AssetDetailPage({ params }: AssetProps) {
  const { id } = await params;
  const asset = assets.find((a) => a.id === id);

  if (!asset) {
    notFound();
  }

  const specs = [
    { label: 'Ubicación', value: asset.address || asset.municipality },
    { label: 'Provincia', value: asset.province },
    { label: 'Tipología', value: asset.typology },
    {
      label: 'Superficie',
      value: asset.areaSqm !== null ? `${formatNumber(asset.areaSqm)} m²` : 'No informada'
    },
    { label: 'Situación posesoria', value: asset.possession },
    {
      label: 'Rentabilidad orientativa',
      value: asset.yieldBps !== null ? `${formatNumber(asset.yieldBps / 100)} %` : 'No informada'
    },
    { label: 'Estrategia', value: asset.strategy }
  ];

  return (
    <section className="section pale asset-detail">
      <Link href="/activos" className="back-link">
        ← Volver al catálogo de activos
      </Link>

      <div className="asset-detail-heading">
        <div>
          <p className="eyebrow">{asset.municipality} · {asset.province}</p>
          <h1>{asset.title}</h1>
          <p>
            {asset.reference} ·{' '}
            <strong>{asset.status === 'RESERVED' ? 'Reservado' : 'Disponible'}</strong>
          </p>
        </div>
        <p className="detail-price">{formatMoney(asset.priceCents)}</p>
      </div>

      <div className="asset-body">
        <div>
          <div className="detail-image-empty">
            <span>{asset.typology}</span>
            <small>Dossier fotográfico y documentación confidencial bajo petición.</small>
          </div>

          <h2>Información del activo</h2>
          {asset.description && (
            <p className="preserve-lines" style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--muted)' }}>
              {asset.description}
            </p>
          )}

          <dl className="specs">
            {specs.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <aside className="asset-enquiry">
          <h2>El siguiente paso</h2>
          <p>
            Solicite el cuaderno de venta completo o concierte una visita con el equipo responsable.
          </p>
          <Link
            href={`/contacto?activo=${encodeURIComponent(asset.id)}&tipo=informacion`}
            className="button gold"
          >
            Solicitar información <span aria-hidden="true">↗</span>
          </Link>
          <Link
            href={`/contacto?activo=${encodeURIComponent(asset.id)}&tipo=visita`}
            className="button secondary"
          >
            Solicitar visita <span aria-hidden="true">↗</span>
          </Link>
          <p className="small">
            Toda información técnica y documental queda sujeta al protocolo de confidencialidad de ORBANIX GROUP.
          </p>
        </aside>
      </div>
    </section>
  );
}
