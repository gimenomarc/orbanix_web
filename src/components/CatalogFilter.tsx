'use client';

import React, { useState, useMemo } from 'react';
import { PublicAsset } from '../types';
import AssetCard from './AssetCard';

interface CatalogFilterProps {
  initialAssets: PublicAsset[];
}

export default function CatalogFilter({ initialAssets }: CatalogFilterProps) {
  const [query, setQuery] = useState('');
  const [province, setProvince] = useState('');
  const [typology, setTypology] = useState('');
  const [status, setStatus] = useState('');

  const filteredAssets = useMemo(() => {
    return initialAssets.filter((asset) => {
      const matchesQuery =
        !query ||
        asset.title.toLowerCase().includes(query.toLowerCase()) ||
        asset.reference.toLowerCase().includes(query.toLowerCase()) ||
        asset.municipality.toLowerCase().includes(query.toLowerCase());

      const matchesProvince = !province || asset.province.toLowerCase() === province.toLowerCase();
      const matchesTypology = !typology || asset.typology.toLowerCase().includes(typology.toLowerCase());
      const matchesStatus = !status || asset.status === status;

      return matchesQuery && matchesProvince && matchesTypology && matchesStatus;
    });
  }, [initialAssets, query, province, typology, status]);

  const handleReset = () => {
    setQuery('');
    setProvince('');
    setTypology('');
    setStatus('');
  };

  return (
    <div>
      <div className="filter-form" aria-label="Filtrar activos">
        <div className="filter-grid">
          <label>
            Buscar
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Referencia, título o municipio"
              maxLength={150}
            />
          </label>

          <label>
            Provincia
            <select value={province} onChange={(e) => setProvince(e.target.value)}>
              <option value="">Todas las provincias</option>
              <option value="Barcelona">Barcelona</option>
              <option value="Girona">Girona</option>
              <option value="Lleida">Lleida</option>
              <option value="Tarragona">Tarragona</option>
            </select>
          </label>

          <label>
            Tipología
            <select value={typology} onChange={(e) => setTypology(e.target.value)}>
              <option value="">Todas las tipologías</option>
              <option value="Residencial">Residencial</option>
              <option value="Oficinas">Oficinas</option>
              <option value="Hotelero">Hotelero / Singular</option>
              <option value="Industrial">Industrial / Logístico</option>
              <option value="Suelo">Suelo</option>
              <option value="Comercial">Comercial / Retail</option>
            </select>
          </label>

          <label>
            Estado
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="">Todos los estados</option>
              <option value="AVAILABLE">Disponible</option>
              <option value="RESERVED">Reservado</option>
            </select>
          </label>
        </div>

        <div className="filter-actions">
          <button
            type="button"
            className="text-link"
            onClick={handleReset}
            style={{ cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
          >
            Limpiar filtros ↻
          </button>
        </div>
      </div>

      <div className="catalog-results" id="resultados" aria-live="polite">
        <div className="result-heading">
          <p>
            {filteredAssets.length}{' '}
            {filteredAssets.length === 1 ? 'activo encontrado' : 'activos encontrados'}
          </p>
          <span>CATALUNYA · ORBANIX SELECTION</span>
        </div>

        {filteredAssets.length > 0 ? (
          <div className="asset-grid">
            {filteredAssets.map((asset) => (
              <AssetCard key={asset.id} asset={asset} />
            ))}
          </div>
        ) : (
          <div className="notice" role="status">
            <strong>No se han encontrado activos para estos filtros.</strong>
            <p>Pruebe a seleccionar otra provincia o tipología, o póngase en contacto directo con nuestro equipo.</p>
          </div>
        )}
      </div>
    </div>
  );
}
