import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ORBANIX Private',
  description: 'Acceso reservado a clientes e inversores de ORBANIX GROUP.'
};

export default function AreaPrivadaPage() {
  return (
    <section className="private-hero">
      <div>
        <p className="eyebrow">ORBANIX PRIVATE</p>
        <h1>
          Su próxima<br />
          oportunidad.<br />
          <em>Su propio espacio.</em>
        </h1>
        <p>Una relación directa con ORBANIX. Información, documentación y seguimiento de sus operaciones.</p>
        <div className="private-principles">
          <span>CONFIDENCIALIDAD</span>
          <span>CONTINUIDAD</span>
          <span>CRITERIO</span>
        </div>
      </div>

      <div className="private-access-card" id="auth-card" data-mode="login">
        <p className="eyebrow">ACCESO DE CLIENTES</p>
        <h2>Acceda a su espacio.</h2>
        <div className="notice" role="status">
          <strong>Acceso pendiente de activación.</strong>
          <p>El servicio de clientes de la nueva web todavía no está disponible.</p>
        </div>

        <form id="private-login">
          <fieldset disabled>
            <label>
              Email
              <input type="email" name="email" autoComplete="username" required maxLength={254} />
            </label>
            <label>
              Contraseña
              <input type="password" name="password" autoComplete="current-password" required maxLength={128} />
            </label>
            <button className="button gold" type="submit">
              Entrar <span aria-hidden="true">↗</span>
            </button>
          </fieldset>
          <p className="form-status" role="status"></p>
        </form>

        <div className="access-help">
          <Link href="/contacto?tipo=private">Solicitar acceso o ayuda</Link>
        </div>
      </div>
    </section>
  );
}
