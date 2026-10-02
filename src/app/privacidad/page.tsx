import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Información relativa a la protección de datos y privacidad en ORBANIX GROUP.'
};

export default function PrivacidadPage() {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">INFORMACIÓN</p>
          <h1>Política de Privacidad</h1>
        </div>
      </section>

      <section className="section legal">
        <h2>Protección de datos personales</h2>
        <p>
          En cumplimiento del Reglamento General de Protección de Datos (RGPD) y la normativa aplicable, le informamos de que los datos facilitados a través de los formularios de contacto serán tratados confidencialmente por ORBANIX GROUP con la finalidad exclusiva de responder a su consulta, remitirle información solicitada sobre activos o coordinar visitas.
        </p>
        <p style={{ marginTop: '20px' }}>
          Los datos no serán cedidos a terceros salvo obligación legal o requerimiento expreso para la ejecución del mandato contratado. Puede ejercitar sus derechos de acceso, rectificación, supresión y oposición escribiendo a <a href="mailto:info@orbanixgroup.com">info@orbanixgroup.com</a>.
        </p>
      </section>
    </>
  );
}
