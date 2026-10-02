import React from 'react';
import Link from 'next/link';
import { PublicAsset } from '../types';
import { formatMoney, formatNumber } from '../data/assets';

interface AssetCardProps {
  asset: PublicAsset;
}

export default function AssetCard({ asset }: AssetCardProps) {
  return (
    <article className="asset-card">
      <Link href={`/activos/${encodeURIComponent(asset.id)}`}>
        <div className="asset-cover">
          <span>{asset.typology}</span>
          <strong>{asset.reference}</strong>
          <small>{asset.address || 'Ubicación reservada'}</small>
        </div>
        <div className="asset-copy">
          <div className="asset-meta">
            <span>{asset.municipality}</span>
            <span className="asset-status">
              {asset.status === 'RESERVED' ? 'Reservado' : 'Disponible'}
            </span>
          </div>
          <h3>{asset.title}</h3>
          <p>
            {asset.province}
            {asset.areaSqm !== null ? ` · ${formatNumber(asset.areaSqm)} m²` : ''}
          </p>
          <div className="asset-price">
            <strong>{formatMoney(asset.priceCents)}</strong>
            <span aria-hidden="true">↗</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
