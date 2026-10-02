import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Información sobre el uso de cookies en el sitio web de ORBANIX GROUP.'
};

export default function CookiesPage() {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">INFORMACIÓN</p>
          <h1>Política de Cookies</h1>
        </div>
      </section>

      <section className="section legal">
        <h2>Uso de cookies técnicas</h2>
        <p>
          Este sitio web utiliza únicamente cookies técnicas y de preferencias estrictamente necesarias para el correcto funcionamiento de la navegación y la visualización de los contenidos.
        </p>
        <p style={{ marginTop: '20px' }}>
          No se emplean cookies de seguimiento publicitario ni de elaboración de perfiles comerciales sin su consentimiento informado. Para más detalles, contacte con <a href="mailto:info@orbanixgroup.com">info@orbanixgroup.com</a>.
        </p>
      </section>
    </>
  );
}
