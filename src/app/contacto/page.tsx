import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '../../components/ContactForm';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Póngase en contacto con ORBANIX GROUP. Relaciones que construyen valor en Real Estate, Investment y Advisory.'
};

export default function ContactoPage() {
  return (
    <>
      <section className="page-hero">
        <div>
          <p className="eyebrow">CONTACTO</p>
          <h1>
            Una conversación.<br />
            <em>Un punto de partida.</em>
          </h1>
          <p>Comparta con nosotros el contexto de su consulta o proyecto inmobiliario.</p>
        </div>
      </section>

      <section className="section contact-layout">
        <aside>
          <p className="eyebrow">ORBANIX GROUP</p>
          <h2>
            Relaciones que<br />
            construyen valor.
          </h2>
          <p>
            <a href="mailto:info@orbanixgroup.com" style={{ color: 'var(--gold)', fontSize: '18px' }}>
              info@orbanixgroup.com
            </a>
          </p>
          <p style={{ color: 'var(--muted)' }}>
            Barcelona · Catalunya
          </p>

          <div style={{ marginTop: '30px' }}>
            <Link href="/contacto?tipo=institucional" className="text-link">
              Propuestas para fondos e instituciones <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="contact-private" style={{ marginTop: '50px', borderTop: '1px solid var(--line)', paddingTop: '30px' }}>
            <h3 style={{ fontSize: '22px' }}>Atención directa y discreción</h3>
            <p style={{ color: 'var(--muted)', marginTop: '14px', fontSize: '15px' }}>
              Tratamos cada solicitud con la máxima reserva profesional, asignando a un responsable especializado según la tipología del activo.
            </p>
          </div>
        </aside>

        <div>
          <Suspense fallback={<div className="notice">Cargando formulario de contacto...</div>}>
            <ContactForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
