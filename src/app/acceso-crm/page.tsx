import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acceso CRM',
  description: 'Acceso interno al CRM de ORBANIX GROUP.'
};

export default function AccesoCRMPage() {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">ACCESO INTERNO</p>
          <h1>
            ORBANIX<br />
            <em>Deal Control.</em>
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="notice" role="status">
          <strong>Acceso pendiente de configuración.</strong>
          <p>El CRM nuevo se activará en una aplicación independiente.</p>
        </div>
      </section>
    </>
  );
}
