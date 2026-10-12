'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { assets } from '../data/assets';

export default function ContactForm() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get('tipo') || 'general';
  const assetId = searchParams.get('activo') || undefined;
  const asset = assetId ? assets.find((a) => a.id === assetId) : undefined;

  const getInitialNeed = () => {
    if (initialType === 'institucional') return 'Gestión de cartera';
    if (initialType === 'visita') return 'Solicitud de visita';
    if (initialType === 'informacion') return 'Información de activo';
    if (initialType === 'private') return 'Acceso a ORBANIX Private';
    return 'General';
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    need: getInitialNeed(),
    message: asset ? `Solicito información sobre el activo: ${asset.title} (Ref: ${asset.reference})` : '',
    consent: false,
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (asset) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message || `Solicito información sobre el activo: ${asset.title} (Ref: ${asset.reference})`,
      }));
    }
  }, [asset]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) return;

    setStatus('submitting');
    setErrorMessage('');

    try {
      const payload = {
        ...formData,
        assetId: asset?.id,
        assetTitle: asset?.title,
        assetRef: asset?.reference,
        type: initialType,
      };

      let response: Response | null = null;

      // 1. En Nuvolink / Plesk (hosting de producción), el endpoint es /contact.php
      try {
        const phpRes = await fetch('/contact.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (phpRes.ok) {
          response = phpRes;
        }
      } catch {
        // Fallback a /api/contact si no está disponible PHP
      }

      // 2. Si no respondió PHP (ej. en desarrollo local de Next.js), recurre a /api/contact
      if (!response) {
        response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Ocurrió un error al enviar el formulario.');
      }

      setStatus('success');
    } catch (err: any) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err.message || 'No se pudo enviar la consulta. Por favor, inténtelo de nuevo o contacte directamente a info@orbanixgroup.com.');
    }
  };

  if (status === 'success') {
    return (
      <div
        className="notice"
        role="status"
        style={{
          padding: '36px',
          background: '#192820',
          borderLeftColor: '#c6aa75',
          borderRadius: '4px',
        }}
      >
        <strong style={{ fontSize: '22px', color: '#c6aa75', display: 'block', fontFamily: 'var(--serif)' }}>
          Hemos recibido su solicitud
        </strong>
        <p style={{ marginTop: '14px', fontSize: '15px', color: '#edece5', lineHeight: 1.7 }}>
          Revisaremos su consulta con la máxima discreción y estricta confidencialidad. Nos pondremos en contacto con usted a la mayor brevedad para ofrecerle una atención personalizada y adaptada a sus objetivos.
        </p>
        <button
          type="button"
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
              consent: false,
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
  const isPrivate = initialType === 'private';

  const formLegend = isInstitutional
    ? 'Propuesta institucional'
    : isVisit
    ? 'Solicitud de visita'
    : isPrivate
    ? 'Solicitud de acceso ORBANIX Private'
    : 'Su consulta';

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <fieldset disabled={status === 'submitting'}>
        <legend>{formLegend}</legend>

        {status === 'error' && (
          <div className="notice error" role="alert" style={{ marginBottom: '22px' }}>
            <strong>Aviso:</strong> {errorMessage}
          </div>
        )}

        <div className="form-grid">
          <label>
            Nombre completo *
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
            Email de contacto *
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
          {isInstitutional ? (
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
          ) : (
            <label className="full">
              Tipo de solicitud
              <select name="need" value={formData.need} onChange={handleChange}>
                <option value="General">Consulta General</option>
                <option value="Información de activo">Información de Activo</option>
                <option value="Solicitud de visita">Solicitud de Visita</option>
                <option value="Gestión de cartera">Gestión de Cartera / Inversión</option>
                <option value="Mandato de desinversión">Mandato de Desinversión</option>
                <option value="Acceso a ORBANIX Private">Acceso a ORBANIX Private</option>
                <option value="Otro">Otro</option>
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
          {status === 'submitting'
            ? 'Enviando consulta…'
            : isVisit
            ? 'Solicitar visita'
            : isPrivate
            ? 'Solicitar acceso'
            : 'Enviar consulta'}{' '}
          <span aria-hidden="true">↗</span>
        </button>
      </fieldset>
    </form>
  );
}
