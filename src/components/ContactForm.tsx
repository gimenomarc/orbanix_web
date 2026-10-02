'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface ContactFormProps {
  initialType?: string;
  assetId?: string;
  assetTitle?: string;
}

export default function ContactForm({ initialType = 'general', assetId, assetTitle }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    need: initialType === 'institucional' ? 'Gestión de cartera' : 'General',
    message: assetTitle ? `Solicito información sobre el activo: ${assetTitle} (${assetId})` : '',
    consent: false
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) return;

    setStatus('submitting');
    // Simulate direct contact handling or API call
    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  if (status === 'success') {
    return (
      <div className="notice" role="status" style={{ padding: '36px', background: '#192820', borderLeftColor: '#c6aa75' }}>
        <strong style={{ fontSize: '20px', color: '#c6aa75' }}>Consulta enviada correctamente</strong>
        <p style={{ marginTop: '14px', fontSize: '15px', color: '#edece5' }}>
          Gracias por contactar con <strong>ORBANIX GROUP</strong>. Nuestro equipo de Real Estate & Advisory revisará su solicitud con estricta confidencialidad y se pondrá en contacto en breve.
        </p>
        <button
          className="button gold"
          style={{ marginTop: '24px' }}
          onClick={() => {
            setStatus('idle');
            setFormData({
              name: '',
              email: '',
              phone: '',
              company: '',
              need: 'General',
              message: '',
              consent: false
            });
          }}
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  const isInstitutional = initialType === 'institucional';
  const isVisit = initialType === 'visita';

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <fieldset disabled={status === 'submitting'}>
        <legend>
          {isInstitutional
            ? 'Propuesta institucional'
            : isVisit
            ? 'Solicitud de visita'
            : 'Su consulta'}
        </legend>
        <div className="form-grid">
          <label>
            Nombre *
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              maxLength={180}
              required
              placeholder="Su nombre y apellidos"
            />
          </label>
          <label>
            Email *
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              maxLength={254}
              required
              placeholder="correo@empresa.com"
            />
          </label>
          <label>
            Teléfono
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="tel"
              maxLength={40}
              placeholder="+34 600 000 000"
            />
          </label>
          <label>
            Empresa / Entidad
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              autoComplete="organization"
              maxLength={180}
              placeholder="Nombre de su entidad o family office"
            />
          </label>
          {isInstitutional && (
            <label className="full">
              Área de interés
              <select name="need" value={formData.need} onChange={handleChange}>
                <option>Gestión de cartera</option>
                <option>Comercialización de activos</option>
                <option>Mandato de desinversión</option>
                <option>Buyer sourcing</option>
                <option>Advisory estratégico</option>
                <option>Otro</option>
              </select>
            </label>
          )}
          <label className="full">
            Mensaje *
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              maxLength={8000}
              required
              placeholder="Detalle su consulta, requisitos del activo o alcance de la propuesta..."
            />
          </label>
        </div>

        <label className="consent">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
          />
          <span>
            He leído la <Link href="/privacidad">política de privacidad</Link> y autorizo el tratamiento de mis datos para atender esta consulta.
          </span>
        </label>

        <button className="button gold" type="submit" disabled={!formData.consent || status === 'submitting'}>
          {status === 'submitting' ? 'Enviando consulta…' : isVisit ? 'Solicitar visita' : 'Enviar consulta'}{' '}
          <span aria-hidden="true">↗</span>
        </button>
      </fieldset>
    </form>
  );
}
