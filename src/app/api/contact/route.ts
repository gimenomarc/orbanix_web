import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  need?: string;
  message: string;
  consent: boolean;
  assetId?: string;
  assetTitle?: string;
  assetRef?: string;
  type?: string;
}

export async function POST(request: Request) {
  try {
    const data: ContactPayload = await request.json();

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Por favor, complete los campos obligatorios (Nombre, Email y Mensaje).' },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString('es-ES', {
      timeZone: 'Europe/Madrid',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    const randomSuffix = Math.random().toString(36).substring(2, 7).toUpperCase();
    const reference = `ORB-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${randomSuffix}`;
    const targetRecipient = process.env.CONTACT_RECIPIENT || 'info@orbanixgroup.com';

    const subject = `[ORBANIX GROUP] Nueva Solicitud: ${data.name} · ${data.need || data.type || 'Consulta'} [${reference}]`;

    // Clean plain text layout
    const formattedText = [
      '====================================================================',
      '                   ORBANIX GROUP · CONSULTA WEB                     ',
      '         Real Estate · Investment · Advisory (Catalunya)            ',
      '====================================================================',
      '',
      `REFERENCIA : ${reference}`,
      `FECHA/HORA : ${timestamp}`,
      `DESTINATARIO: ${targetRecipient}`,
      '',
      '--------------------------------------------------------------------',
      ' DATOS DEL SOLICITANTE',
      '--------------------------------------------------------------------',
      `Nombre Completo   : ${data.name}`,
      `Email de Contacto : ${data.email}`,
      `Teléfono          : ${data.phone ? data.phone : 'No indicado'}`,
      `Empresa / Entidad : ${data.company ? data.company : 'No indicada'}`,
      '',
      '--------------------------------------------------------------------',
      ' DETALLES DE LA SOLICITUD',
      '--------------------------------------------------------------------',
      `Tipo de Servicio  : ${data.need || 'General'}`,
      data.assetTitle ? `Activo Consultado : ${data.assetTitle} (Ref: ${data.assetRef || data.assetId})` : null,
      data.type ? `Contexto          : ${data.type}` : null,
      '',
      '--------------------------------------------------------------------',
      ' MENSAJE DE LA CONSULTA',
      '--------------------------------------------------------------------',
      data.message,
      '',
      '====================================================================',
      'Protocolo de Confidencialidad y Protección de Datos ORBANIX GROUP',
      'Enviado automáticamente desde el formulario web oficial.',
      '====================================================================',
    ].filter(Boolean).join('\n');

    // Luxury HTML layout with ORBANIX gold branding
    const formattedHtml = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>${subject}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0f0d; color: #edece5; margin: 0; padding: 30px 15px; }
    .wrapper { max-width: 650px; margin: 0 auto; background-color: #121915; border: 1px solid #c6aa7544; border-radius: 8px; overflow: hidden; box-shadow: 0 12px 40px rgba(0,0,0,0.5); }
    .header { background: linear-gradient(135deg, #0e1511 0%, #1a261f 100%); padding: 36px 36px 28px; border-bottom: 2px solid #c6aa75; text-align: left; }
    .header .eyebrow { color: #c6aa75; font-size: 11px; font-weight: 600; letter-spacing: 2.5px; text-transform: uppercase; margin: 0 0 8px 0; }
    .header h1 { font-family: Georgia, serif; color: #fbfbf7; font-size: 26px; font-weight: normal; margin: 0; }
    .badge { display: inline-block; background-color: #24352b; color: #c6aa75; border: 1px solid #c6aa7566; padding: 4px 10px; font-size: 12px; border-radius: 4px; margin-top: 12px; }
    .content { padding: 32px 36px; }
    .section-title { font-size: 13px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #c6aa75; margin: 28px 0 14px; padding-bottom: 6px; border-bottom: 1px solid #2a3a30; }
    .grid { width: 100%; border-collapse: collapse; margin-bottom: 10px; }
    .grid td { padding: 10px 0; vertical-align: top; border-bottom: 1px solid #1c2720; font-size: 14px; }
    .grid .label { color: #8e9a8f; width: 38%; font-weight: 500; }
    .grid .value { color: #f5f4ef; font-weight: 600; }
    .grid .value a { color: #c6aa75; text-decoration: none; }
    .message-box { background-color: #0b100d; border-left: 3px solid #c6aa75; padding: 20px 22px; border-radius: 4px; font-size: 15px; line-height: 1.7; color: #e4e3dd; white-space: pre-wrap; word-break: break-word; margin-top: 10px; }
    .footer { background-color: #0c120e; padding: 22px 36px; border-top: 1px solid #1f2b23; text-align: center; font-size: 12px; color: #727e73; line-height: 1.5; }
    .footer strong { color: #c6aa75; }
    .cta-bar { margin-top: 25px; padding-top: 20px; border-top: 1px dashed #2d3c32; }
    .cta-btn { display: inline-block; background: #c6aa75; color: #0d130f !important; padding: 10px 20px; font-size: 13px; font-weight: bold; text-decoration: none; border-radius: 4px; margin-right: 10px; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <p class="eyebrow">ORBANIX GROUP · RECEPCIÓN DE SOLICITUDES</p>
      <h1>Nueva Consulta Web Registrada</h1>
      <span class="badge">Ref: ${reference}</span>
      <span class="badge" style="background:#17221b; color:#a2b29f; border-color:#2a3a30;">${timestamp}</span>
    </div>

    <div class="content">
      <div class="section-title">Datos del Solicitante</div>
      <table class="grid">
        <tr>
          <td class="label">Nombre completo</td>
          <td class="value">${data.name}</td>
        </tr>
        <tr>
          <td class="label">Email de contacto</td>
          <td class="value"><a href="mailto:${data.email}">${data.email}</a></td>
        </tr>
        <tr>
          <td class="label">Teléfono</td>
          <td class="value">${data.phone ? `<a href="tel:${data.phone}">${data.phone}</a>` : '<em>No indicado</em>'}</td>
        </tr>
        <tr>
          <td class="label">Empresa / Entidad</td>
          <td class="value">${data.company || '<em>Particular / No indicada</em>'}</td>
        </tr>
      </table>

      <div class="section-title">Detalles de la Solicitud</div>
      <table class="grid">
        <tr>
          <td class="label">Tipo de servicio</td>
          <td class="value" style="color: #c6aa75;">${data.need || 'General'}</td>
        </tr>
        ${data.assetTitle ? `
        <tr>
          <td class="label">Activo consultado</td>
          <td class="value">${data.assetTitle} <span style="color:#c6aa75;">(Ref: ${data.assetRef || data.assetId})</span></td>
        </tr>
        ` : ''}
        <tr>
          <td class="label">Destinatario oficial</td>
          <td class="value"><a href="mailto:${targetRecipient}">${targetRecipient}</a></td>
        </tr>
      </table>

      <div class="section-title">Mensaje de la Consulta</div>
      <div class="message-box">${data.message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>

      <div class="cta-bar">
        <a class="cta-btn" href="mailto:${data.email}?subject=Re:%20[ORBANIX%20GROUP]%20Consulta%20${encodeURIComponent(reference)}">Responder al Solicitante ↗</a>
      </div>
    </div>

    <div class="footer">
      <p>Este informe ha sido generado automáticamente por el portal web oficial de <strong>ORBANIX GROUP</strong>.<br>
      Tratamiento confidencial según directrices de Real Estate & Advisory Catalunya.</p>
    </div>
  </div>
</body>
</html>
    `;

    let delivered = false;

    // 1. Try Resend API if RESEND_API_KEY is configured
    if (process.env.RESEND_API_KEY) {
      try {
        const res = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM || 'ORBANIX GROUP <onboarding@resend.dev>',
            to: [targetRecipient],
            reply_to: data.email,
            subject,
            html: formattedHtml,
            text: formattedText,
          }),
        });
        if (res.ok) {
          delivered = true;
          console.log('[ORBANIX Mailer] Sent successfully via Resend');
        } else {
          console.error('[ORBANIX Mailer] Resend API error:', await res.text());
        }
      } catch (err) {
        console.error('[ORBANIX Mailer] Error calling Resend:', err);
      }
    }

    // 2. Try SMTP if SMTP_PASS is configured (defaults host to mail.orbanixgroup.com and user to info@orbanixgroup.com)
    if (!delivered && (process.env.SMTP_PASS || process.env.SMTP_HOST)) {
      try {
        const host = process.env.SMTP_HOST || 'mail.orbanixgroup.com';
        const port = Number(process.env.SMTP_PORT) || 587;
        const user = process.env.SMTP_USER || 'info@orbanixgroup.com';
        const pass = process.env.SMTP_PASS;

        if (pass) {
          const transporter = nodemailer.createTransport({
            host,
            port,
            secure: port === 465,
            auth: { user, pass },
          });

          await transporter.sendMail({
            from: process.env.SMTP_FROM || `"ORBANIX Web" <${user}>`,
            to: targetRecipient,
            replyTo: `"${data.name}" <${data.email}>`,
            subject,
            text: formattedText,
            html: formattedHtml,
          });

          delivered = true;
          console.log('[ORBANIX Mailer] Sent successfully via SMTP');
        }
      } catch (err) {
        console.error('[ORBANIX Mailer] SMTP delivery failed:', err);
      }
    }

    // 3. Fallback log for tracking
    console.log(`[ORBANIX Lead Received] Reference: ${reference} | Solicitante: ${data.name} <${data.email}> | Delivered: ${delivered}`);

    return NextResponse.json({
      success: true,
      reference,
      delivered,
    });
  } catch (error: any) {
    console.error('[ORBANIX API Error]', error);
    return NextResponse.json(
      { error: error?.message || 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}
