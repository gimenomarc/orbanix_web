import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aviso Legal',
  description: 'Información legal y condiciones generales de uso del sitio web de ORBANIX GROUP.'
};

export default function LegalPage() {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">INFORMACIÓN</p>
          <h1>Aviso legal</h1>
        </div>
      </section>

      <section className="section legal">
        <h2>ORBANIX GROUP</h2>
        <p>
          Contacto: <a href="mailto:info@orbanixgroup.com">info@orbanixgroup.com</a>.
        </p>
        <p style={{ marginTop: '20px' }}>
          El acceso y navegación por este sitio web atribuye la condición de usuario e implica la aceptación plena y sin reservas de las disposiciones incluidas en este Aviso Legal.
        </p>
        <p>
          La información sobre inmuebles, activos, rentabilidades o superficies contenida en este portal tiene carácter exclusivamente orientativo e informativo y no constituye oferta vinculante ni asesoramiento financiero o legal en firme.
        </p>
      </section>
    </>
  );
}
