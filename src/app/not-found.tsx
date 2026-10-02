import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div>
        <p className="eyebrow">ERROR 404</p>
        <h1>
          No encontramos<br />
          <em>esta página.</em>
        </h1>
        <p>La dirección indicada no existe o ha sido trasladada.</p>
        <div style={{ marginTop: '35px' }}>
          <Link href="/" className="button gold">
            Volver al inicio <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
